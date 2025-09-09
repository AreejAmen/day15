const checkAuth = (req, res, next) => {
  if (req.session.token) 
    next();
  res.status(401).json({ message: "unauthorized" });
};
module.exports = checkAuth;