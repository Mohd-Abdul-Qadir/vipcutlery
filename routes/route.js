const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const secretKey = "Helloabdulqadir";
router.use(bodyParser.json());
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const product = require("../services/product.servive");

cloudinary.config({
  cloud_name: "dgut9gwwy",
  api_key: "428397171586985",
  api_secret: "WSJLQK3YrdVl7K8yVsSVg3pfTDo",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "products",
  allowedFormats: ["jpg", "jpeg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
});
const parser = multer({ storage: storage });
router.post("/login", (req, res) => {
  console.log(" server");
  const { email, password } = req.body;

  if (email === "irfankhan@vipcutlery.pro" && password === "12345") {
    const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" });
    return res.status(200).json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

router.post("/product-images", parser.array("file", 5), (req, res) => {
  res.status(200).json(req.files);
});
router.post("/product", product.createPorduct);
router.get("/products", product.getAllProduct);
router.get("/products/:id", product.getProduct);
router.put("/products/:id", product.updateProduct);
router.delete("/products/:id", product.deleteProduct);
router.get("/new-product", product.getNewProduct);

module.exports = router;
