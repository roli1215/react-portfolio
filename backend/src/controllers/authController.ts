import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      username,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "2h",
    },
  );

  res.json({
    token,
  });
};

export const me = (req: Request, res: Response) => {
  res.json({
    authenticated: true,
  });
};
