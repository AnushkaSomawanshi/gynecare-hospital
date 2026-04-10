import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import User, { IUser } from "../models/User";
import { AuthRequest } from "../middleware/auth";

const signToken = (id: string): string => {
  const secret = process.env.JWT_SECRET || "change_me";
  const expiresIn = process.env.JWT_EXPIRES_IN || "7d";
  return jwt.sign({ id }, secret, { expiresIn } as jwt.SignOptions);
};

const userResponse = (user: IUser) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  phone: user.phone,
  role: user.role,
  avatar: user.avatar,
  abhaId: user.abhaId,
});

const RegisterSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().min(10),
  role: z.enum(["patient", "doctor", "admin"]).optional().default("patient"),
  abhaId: z.string().optional(),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsed = RegisterSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ success: false, error: parsed.error.errors[0].message });
      return;
    }

    const { name, email, password, phone, role, abhaId } = parsed.data;

    const existing = await User.findOne({ email });
    if (existing) {
      res.status(409).json({ success: false, error: "Email already registered" });
      return;
    }

    const user = await User.create({ name, email, password, phone, role, abhaId });
    const token = signToken(String(user._id));

    res.status(201).json({
      success: true,
      token,
      user: userResponse(user),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Registration failed" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsed = LoginSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ success: false, error: parsed.error.errors[0].message });
      return;
    }

    const { email, password } = parsed.data;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(401).json({ success: false, error: "Invalid email or password" });
      return;
    }

    const match = await user.comparePassword(password);
    if (!match) {
      res.status(401).json({ success: false, error: "Invalid email or password" });
      return;
    }

    const token = signToken(String(user._id));

    res.json({
      success: true,
      token,
      user: userResponse(user),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Login failed" });
  }
};

export const getMe = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = req.user!;
    res.json({ success: true, user: userResponse(user) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to get user" });
  }
};
