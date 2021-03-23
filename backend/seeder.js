const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const products = require("./data/products");
const users = require("./data/users");
const User = require("./models/userModel");
const Product = require("./models/ProductModel");
const Order = require("./models/OrderModel");
const connectDB = require("./config/db");

// // Run dotenv
// dotenv.config();

//Run connectDb
connectDB();

//import data
const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data Imported!".cyan.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red);
    process.exit(1);
  }
};

//destroy data
const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
