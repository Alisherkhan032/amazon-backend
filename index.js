require("dotenv").config();
const express = require("express");
const { authenticateToken } = require("./middleware/auth");
const cors = require("cors");
const data = require("./data");

const app = express();
const PORT = 3030;

app.use(express.json());
app.use(cors({}));

app.use(authenticateToken);
app.get("/", (req, res) => {
  console.log("Hello World");
  res.json(`Hello World ${req.user}`);
});

// app.get('/cart', )

app.listen(PORT, () => {
  console.log(`dev Server is running on port ${PORT}`);
});
