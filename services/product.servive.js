const Product = require("../model/product");
exports.createPorduct = (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imageUrls: req.body.files.map((path) => path),
    });
    newProduct
      .save()
      .then((product) => res.json(product))
      .catch((err) => {
        console.log(err);
        res.json({ message: "Some Error Occurred" });
      });
  } catch (error) {
    console.log(error, "error");
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    let allProduct = await Product.find();
    res.json(allProduct);
  } catch (error) {}
};

exports.getProduct = (req, res) => {
  try {
    Product.findById(req.params.id)
      .then((product) => res.json(product))
      .catch((err) => console.log(err));
  } catch (error) {}
};

exports.getNewProduct = async (req, res) => {
  try {
    let allProduct = await Product.find().sort({ _id: 1 }).limit(4);
    res.json(allProduct);
  } catch (error) {
    console.log(error);
  }
};

exports.updateProduct = (req, res) => {
  try {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((product) => res.json(product))
      .catch((err) => console.log(err));
  } catch (error) {}
};

exports.deleteProduct = (req, res) => {
  try {
    Product.findByIdAndDelete(req.params.id)
      .then(() => res.json({ success: true }))
      .catch((err) => console.log(err));
  } catch (error) {}
};
