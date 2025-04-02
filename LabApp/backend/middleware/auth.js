import jwt from "jsonwebtoken";

const auth = (roles = []) => (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = decoded;

    if (roles.length && !roles.includes(decoded.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

export default auth;
