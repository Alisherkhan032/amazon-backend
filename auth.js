require("dotenv").config();
require("./connections/connectMon");

const express = require("express");
const app = express();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(express.json());
app.use(cors({}));

const PORT = 5001;

const Users = require("./models/user.model");
const sessions = new Set();

// app.get("/admin", async (req, res) => {
//   res.json(users);
// });
app.get('/', (req, res) => {
  res.json({message: "Hello World!"});
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await Users.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const user = { username: username, password: hash };
    const newUser = new Users(user);
    await newUser.save();
    res.json({ message: "User Created Successfully!", user: newUser });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ username: username });
  if (!user) {
    return res.status(401).json({ message: "Incorrect username!" });
  }

  try {
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    const userInfo = { username: user.username };
    const token_data = { user: userInfo };
    const refresh_token = jwt.sign(
      token_data,
      process.env.REFRESH_TOKEN_SECRET
    );
    sessions.add(refresh_token);

    const token = generateToken(token_data);
    return res.json({ token, refresh_token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  // return res.json({ message: "Logged in successfully!" });
});

app.post("/token", async (req, res) => {
  const refresh_token = req.body.token;
  // if(!refresh_token) return res.status(401).json({ message: "Unathorized!" });
  !sessions.has(refresh_token)
    ? res.status(400).json({ message: "You need to login" })
    : jwt.verify(
        refresh_token,
        process.env.REFRESH_TOKEN_SECRET,
        function (err, token_data) {
          if (err)
            return res
              .status(403)
              .json({ message: "Forbidden", error: err.message });
          const token = generateToken({ user: token_data.user });
          return res.json({ token });
        }
      );
});

app.post("/logout", async (req, res) => {
  const refresh_token = req.body.token;
  if (!sessions.has(refresh_token))
    return res.status(200).json({ message: "No op" });
  sessions.delete(refresh_token);
  return res.json({ message: "Logged out!" });
});

app.get('/user', async (req, res) => {
  const refreshToken = req.headers.authorization.split(' ')[1];

  if(!refreshToken) return res.status(401).json({ message: "Unauthorized!" });
  if (!sessions.has(refreshToken)) {
    return res.status(401).json({ message: "Unauthorized!" });
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, function (err, token_data) {
    if (err) return res.status(403).json({ message: "Forbidden", error: err.message });
    const { user } = token_data;

    return res.json({user});
  });
});

function generateToken(data) {
  return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "20s",
  });
}

app.listen(PORT, () => {
  console.log(`auth server is running on ${PORT} `);
});
