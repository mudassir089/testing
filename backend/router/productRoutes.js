const express = require("express");
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    if (!products) {
      res.status(404);
      throw new Error("Products Not Found");
    } else {
      res.json(products);
    }
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("Product Not Found");
    } else {
      res.json(product);
    }
  })
);

module.exports = router;
