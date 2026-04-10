import { Request, Response } from "express";
import Blog from "../models/Blog";

export const getBlogs = async (_req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await Blog.find().sort({ publishedAt: -1 });
    res.json({ success: true, data: blogs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to fetch blogs" });
  }
};

export const getBlogById = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(404).json({ success: false, error: "Blog not found" });
      return;
    }
    res.json({ success: true, data: blog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to fetch blog" });
  }
};
