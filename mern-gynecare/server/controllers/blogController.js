const asyncHandler = require('express-async-handler');
const Blog = require('../models/Blog');

// @desc    Get all published blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 9;
  const skip = (page - 1) * limit;

  const filter = { isPublished: true, isDeleted: false };
  if (req.query.category) filter.category = req.query.category;
  if (req.query.search) {
    filter.$or = [
      { title: { $regex: req.query.search, $options: 'i' } },
      { excerpt: { $regex: req.query.search, $options: 'i' } },
      { tags: { $in: [new RegExp(req.query.search, 'i')] } },
    ];
  }

  const total = await Blog.countDocuments(filter);
  const blogs = await Blog.find(filter)
    .select('-content')
    .skip(skip)
    .limit(limit)
    .sort({ publishDate: -1 });

  res.json({
    success: true,
    count: blogs.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: blogs,
  });
});

// @desc    Get blog by ID
// @route   GET /api/blogs/:id
// @access  Public
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog || blog.isDeleted || !blog.isPublished) {
    res.status(404);
    throw new Error('Blog not found');
  }

  // Increment view count
  blog.viewCount += 1;
  await blog.save();

  res.json({ success: true, data: blog });
});

// @desc    Create blog
// @route   POST /api/blogs
// @access  Admin
const createBlog = asyncHandler(async (req, res) => {
  const { title, content, excerpt, category, author, authorRole, imageUrl, readTime, tags, isPublished } = req.body;

  if (!title || !content || !excerpt || !category || !author || !authorRole) {
    res.status(400);
    throw new Error('title, content, excerpt, category, author, and authorRole are required');
  }

  const blog = await Blog.create({
    title, content, excerpt, category, author, authorRole,
    imageUrl: imageUrl || null,
    readTime: readTime || 5,
    tags: tags || [],
    isPublished: isPublished || false,
    publishDate: isPublished ? new Date() : null,
  });

  res.status(201).json({ success: true, data: blog });
});

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Admin
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog || blog.isDeleted) {
    res.status(404);
    throw new Error('Blog not found');
  }

  const fields = ['title', 'content', 'excerpt', 'category', 'author', 'authorRole', 'imageUrl', 'readTime', 'tags'];
  fields.forEach((f) => { if (req.body[f] !== undefined) blog[f] = req.body[f]; });

  // Handle publish toggle
  if (req.body.isPublished !== undefined) {
    if (req.body.isPublished && !blog.isPublished) {
      blog.publishDate = new Date();
    }
    blog.isPublished = req.body.isPublished;
  }

  const updated = await blog.save();
  res.json({ success: true, data: updated });
});

// @desc    Delete/unpublish blog
// @route   DELETE /api/blogs/:id
// @access  Admin
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    res.status(404);
    throw new Error('Blog not found');
  }

  blog.isDeleted = true;
  blog.isPublished = false;
  await blog.save();
  res.json({ success: true, message: 'Blog deleted successfully' });
});

module.exports = { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
