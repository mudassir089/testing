const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "noman",
    email: "noman@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "aslam",
    email: "aslam@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
];

module.exports = users;
