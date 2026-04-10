import mongoose, { Document, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, default: "" },
    category: { type: String, required: true },
    author: { type: String, required: true },
    authorRole: { type: String, required: true },
    imageUrl: {
      type: String,
      default: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    },
    publishedAt: { type: String, required: true },
    readTime: { type: Number, default: 5 },
    tags: [{ type: String }],
  },
  { timestamps: true },
);

export default mongoose.model<IBlog>("Blog", BlogSchema);
