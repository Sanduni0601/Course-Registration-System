const authenticateUser = (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.status(401).json({ message: 'Access Denied' });
    }
  };
  
  const isAdmin = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Only administrators can access this resource.' });
    }
  };
  
  module.exports = {
    authenticateUser,
    isAdmin,
  };
  
