const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: [
        'PCOS',
        'Pregnancy',
        'Cancer',
        'Fertility',
        "Women's Health",
        'Maternal Health',
        'Nutrition',
        'Mental Health',
      ],
    },
    author: { type: String, required: true },
    authorRole: { type: String, required: true },
    publishDate: { type: Date, default: Date.now },
    imageUrl: { type: String, default: null },
    readTime: { type: Number, default: 5 },
    tags: [{ type: String }],
    isPublished: { type: Boolean, default: false },
    viewCount: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
