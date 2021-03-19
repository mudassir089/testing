const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 12345, {
    expiresIn: "45m",
  });
};

modules.exports = generateToken;
