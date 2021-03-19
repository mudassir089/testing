const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    )
      try {
        {
          token = req.headers.authorization.split(" ")[1];
          const decoded = jwt.verify(token, 12345);
          req.user = await User.findById(decoded.id).select("-password");
        }
      } catch (error) {
        res.status(401);
        throw new Error("Not Authorized, token failed");
      }
    if (!token) {
      res.status(401);
      throw new Error("Not Authorizzed, no token");
    }
    next();
  }
});

modules.exports = protect;
