import express from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authorizationToken = req.headers.authorization;

  if (!authorizationToken.startsWith("Bearer")) {
    return res.status(401).json({ error: "Token missing" });
  }

  const token = authorizationToken.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
};

export { authMiddleware };
