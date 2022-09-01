const jwt = require("jsonwebtoken");
exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } else {
    return res.status(400).json({ message: "Authrization Required" });
  }
  next();
};

exports.adminMiddelware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(400).json({ message: "Admin access denied" });
  }
  next();
};


exports.combineMiddelware = (req, res, next) => {
    if (req.user.role !== "admin" || req.user.role !=='user') {
      return res.status(400).json({ message: "Admin access denied" });
    }
    next();
  };
