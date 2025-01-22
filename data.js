const products = [
  {
    Brand: "VredeVogel",
    Description: "Women Silk Blend Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/r/q/x/3xl-vv-9211-vredevogel-original-imahyg2tczuhsayv.jpeg?q=70",
    Price: "\u20b9701",
    id: 0,
  },

  {
    Brand: "Mohit Womens Wear",
    Description: "Women Printed Georgette Anarkali Kurta",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/m/t/q/m-spc-01-gulaboo-fashion-original-imagncfyhgt95sda.jpeg?q=70",
    Price: "\u20b9583",
    id: 2,
  },
  {
    Brand: "Royal Export",
    Description: "Women Cotton Blend Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/w/2/k/s-rx42-ktd-lav-royal-export-original-imagxn3emuytwpsz.jpeg?q=70",
    Price: "\u20b9759",
    id: 3,
  },
  {
    Brand: "Royal Export",
    Description: "Women Art Silk Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/0/x/a/s-rx44-ktd-rosegold-royal-export-original-imagyh5ufsmvv2yw.jpeg?q=70",
    Price: "\u20b9729",
    id: 4,
  },
  {
    Brand: "berrylicious",
    Description: "PS4512 Floral Full Front Embroidered Kurta, Trouser/Pan...",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/q/z/s/l-ps4512blac-berrylicious-original-imagwt9hrzurftcf.jpeg?q=70",
    Price: "\u20b91,559",
    id: 5,
  },
  {
    Brand: "KOTTY",
    Description: "Women Straight Fit Grey Lycra Blend Trousers",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/3/f/0/32-kttwomenspant511-kotty-original-imahyy5dvrgjvzgt.jpeg?q=70",
    Price: "\u20b9492",
    id: 6,
  },
  {
    Brand: "Just Live Fashion",
    Description: "Women Black, Silver Capri",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/l3vxbbk0/capri/n/f/d/free-stripe-capri-2pcs-combo-just-live-fashion-original-imagewpnkwv43qvh.jpeg?q=70",
    Price: "\u20b9365",
    id: 7,
  },
  {
    Brand: "Riyansh hub",
    Description: "Women Pure Cotton Kurti Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/q/n/m-sanvi-grn-m-riyansh-hub-original-imahfhhgf5aycdhv.jpeg?q=70",
    Price: "\u20b9615",
    id: 8,
  },
  {
    Brand: "Royal Export",
    Description: "Women Viscose Rayon Kurti Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/j/u/n/s-rx51-whitework-royal-export-original-imahf28f5khe8dwg.jpeg?q=70",
    Price: "\u20b9749",
    id: 9,
  },
  {
    Brand: "VredeVogel",
    Description: "Women Chanderi Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/g/x/m/l-vv-9451-vredevogel-original-imahy8w4ftjysnmw.jpeg?q=70",
    Price: "\u20b9709",
    id: 10,
  },
  {
    Brand: "KOTTY",
    Description: "Women Regular Fit Light Blue Viscose Rayon Trousers",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/1/r/7/30-kttwomenspant248-kotty-original-imaghngkwcts5ywk.jpeg?q=70",
    Price: "\u20b9499",
    id: 11,
  },
  {
    Brand: "Laxita",
    Description: "Women Viscose Rayon Kurta Pant Attached Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/1/v/0/m-nee-wine-02-nee-fashion-original-imagrmhxtnyab3fs.jpeg?q=70",
    Price: "\u20b9899",
    id: 12,
  },
  {
    Brand: "Royal Export",
    Description: "Women Cotton Blend Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/8/s/j/xl-rx42-ktd-meh-royal-export-original-imahfdz2nw3wmm7a.jpeg?q=70",
    Price: "\u20b9759",
    id: 13,
  },
  {
    Brand: "Riyansh hub",
    Description: "Women Pure Cotton Kurti Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/y/i/f/xl-sanvi-maroon-xl-signature-hub-original-imahfeqcrymqr5mb.jpeg?q=70",
    Price: "\u20b9615",
    id: 14,
  },
  {
    Brand: "berrylicious",
    Description: "Women Viscose Rayon Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/2/0/2/xs-kl3130-berrylicious-original-imagz2bafew95efx.jpeg?q=70",
    Price: "\u20b91,299",
    id: 15,
  },
  {
    Brand: "Shiva Fashion Hub",
    Description: "Women Cotton Blend Kurta Pant Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/w/w/a/l-blueless2024-vasudha-fashion-hub-original-imahf8xgkmwqgnkz.jpeg?q=70",
    Price: "\u20b9444",
    id: 16,
  },
  {
    Brand: "berrylicious",
    Description: "Women Chanderi Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/l/i/1/s-ps1015tb-berrylicious-original-imaggutbceyznzfh.jpeg?q=70",
    Price: "\u20b91,002",
    id: 17,
  },
  {
    Brand: "Riyansh hub",
    Description: "Women Pure Cotton Kurti Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/s/7/f/xl-sanvi-wine-xl-signature-hub-original-imahfeqcynzbgcah.jpeg?q=70",
    Price: "\u20b9615",
    id: 18,
  },
  {
    Brand: "samu",
    Description: "Women Chiffon Kurti Pant Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/v/t/0/m-lakhnavi-kurta-set-for-women-chikkenkari-kurti-women-s-rayon-original-imagqhnk7nefyepc.jpeg?q=70",
    Price: "\u20b9799",
    id: 19,
  },
  {
    Brand: "berrylicious",
    Description: "Embroidered Kurta, Trouser/Pant & Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/m/r/4/l-ps4512blac-berrylicious-original-imagwt9hrvagce9a.jpeg?q=70",
    Price: "\u20b91,559",
    id: 20,
  },
  {
    Brand: "berrylicious",
    Description: "Women Cotton Blend Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/o/v/w/xl-kl3308-berrylicious-original-imagygbavazfrkwt.jpeg?q=70",
    Price: "\u20b9769",
    id: 21,
  },
  {
    Brand: "TS Lifestyle",
    Description: "Women Georgette Kurta Sharara Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/w/o/b/40-wsr-cruse-ts-lifestyle-original-imaghuzumfejh4rw.jpeg?q=70",
    Price: "\u20b91,349",
    id: 22,
  },
  {
    Brand: "MOKOSH",
    Description: "Women Silk Blend Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/8/p/f/xxl-d-412-mokosh-original-imahyhcepygcgvf2.jpeg?q=70",
    Price: "\u20b9869",
    id: 23,
  },
  {
    Brand: "VredeVogel",
    Description: "Women Cotton Silk Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/p/r/a/xl-vv-9219-vredevogel-original-imahyg29trqj3dgh.jpeg?q=70",
    Price: "\u20b9899",
    id: 24,
  },
  {
    Brand: "Zero Stitch",
    Description: "Women Georgette Kurta Sharara Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/5/j/g/m-zs-2235-red-zero-stitch-original-imagwjz95grsgfmf.jpeg?q=70",
    Price: "\u20b91,339",
    id: 25,
  },
  {
    Brand: "Riyansh hub",
    Description: "Women Pure Cotton Kurti Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/q/n/m-sanvi-grn-m-riyansh-hub-original-imahfhhgf5aycdhv.jpeg?q=70",
    Price: "\u20b9615",
    id: 26,
  },
  {
    Brand: "VredeVogel",
    Description: "Women Cotton Silk Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/0/g/d/xxl-vv-9424-vredevogel-original-imahy9dcgesxnyud.jpeg?q=70",
    Price: "\u20b9709",
    id: 27,
  },
  {
    Brand: "VEERAA CLOTHING",
    Description: "Pack of 3 Women Printed Round Neck Cotton Blend Blue, G...",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/g/q/s-vrcwmcmb-veeraa-clothing-original-imafnzm5syaamyc6-bb.jpeg?q=70",
    Price: "\u20b9476",
    id: 28,
  },
  {
    Brand: "AAYUMI",
    Description: "Women Viscose Rayon Kurta Pant Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/q/n/m/xxl-aayumi-383-aayumi-original-imagnh6akkuxky2n.jpeg?q=70",
    Price: "\u20b9691",
    id: 29,
  },
  {
    Brand: "berrylicious",
    Description: "Women Viscose Rayon Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/6/t/l/xl-kl3131-berrylicious-original-imahf7uhkap87uze.jpeg?q=70",
    Price: "\u20b91,239",
    id: 30,
  },
  {
    Brand: "berrylicious",
    Description: "Women Viscose Rayon Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/2/b/h/s-kl3133-berrylicious-original-imahfpv6kwuag2t2.jpeg?q=70",
    Price: "\u20b91,299",
    id: 31,
  },
  {
    Brand: "Riyansh hub",
    Description: "Women Pure Cotton Kurti Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/y/i/f/xl-sanvi-maroon-xl-signature-hub-original-imahfeqcrymqr5mb.jpeg?q=70",
    Price: "\u20b9615",
    id: 32,
  },
  {
    Brand: "ANNU PARIDHAN",
    Description: "Women Viscose Rayon Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/i/w/v/l-anu2167-annu-paridhan-original-imagtyywa53ca3zu.jpeg?q=70",
    Price: "\u20b9699",
    id: 33,
  },
  {
    Brand: "Royal Export",
    Description: "Women Cotton Blend Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/w/2/k/s-rx42-ktd-lav-royal-export-original-imagxn3emuytwpsz.jpeg?q=70",
    Price: "\u20b9759",
    id: 34,
  },
  {
    Brand: "Royal Export",
    Description: "Women Art Silk Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/s/w/g/xl-rx44-ktd-mustard-royal-export-original-imahyrrzq7ezpfhf.jpeg?q=70",
    Price: "\u20b9729",
    id: 35,
  },
  {
    Brand: "Royal Export",
    Description: "Women Art Silk Kurta Pant Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/t/1/x/m-rx44-ktd-firozi-royal-export-original-imahyys642euvaat.jpeg?q=70",
    Price: "\u20b9729",
    id: 36,
  },
  {
    Brand: "MADHURAM FASHION",
    Description: "Women Georgette Kurta Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/f/n/2/m-kurti-set-for-womens-bandhani-aether-fashion-original-imagshkpxsxzuhdj.jpeg?q=70",
    Price: "\u20b9679",
    id: 37,
  },
  {
    Brand: "KOTTY",
    Description: "Women Straight Fit Grey Lycra Blend Trousers",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/3/f/0/32-kttwomenspant511-kotty-original-imahyy5dvrgjvzgt.jpeg?q=70",
    Price: "\u20b9492",
    id: 38,
  },
  {
    Brand: "Indo Era",
    Description: "Women Viscose Rayon Kurta Pant Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/k/n/l/m-rrrrr8074-indo-era-original-imag8n3uzkazttpv-bb.jpeg?q=70",
    Price: "\u20b92,099",
    id: 39,
  },
  {
    Brand: "Aditi Tex Fab",
    Description: "Floral Print Kurta, Trouser/Pant & Dupatta Set",
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/o/u/s/l-kurta-pant-with-dupatta-aditi-tex-fab-original-imagzu786qbqgsxe.jpeg?q=70",
    Price: "\u20b9685",
    id: 40,
  },
];

module.exports = products;