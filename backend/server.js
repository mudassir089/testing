const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const productRoutes = require("./router/productRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running on port 9000");
});

app.use("/api/products/", productRoutes);

app.listen(9000, console.log("Server running on port 5000".bgCyan));
