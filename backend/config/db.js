const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/grocery-store", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected ${conn.connection.host}`.yellow);
  } catch (error) {
    console.error(`Error: ${error.message}`.red);
    process.exit[1];
  }
};

module.exports = connectDb;
