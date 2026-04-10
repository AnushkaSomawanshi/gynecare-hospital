import Types "../types/content";
import Map "mo:core/Map";
import Iter "mo:core/Iter";

module {
  // Blogs
  public func createBlog(
    blogs : Map.Map<Text, Types.Blog>,
    blog : Types.Blog,
  ) {
    blogs.add(blog.id, blog);
  };

  public func getBlog(
    blogs : Map.Map<Text, Types.Blog>,
    id : Text,
  ) : ?Types.Blog {
    blogs.get(id);
  };

  public func updateBlog(
    blogs : Map.Map<Text, Types.Blog>,
    blog : Types.Blog,
  ) {
    blogs.add(blog.id, blog);
  };

  public func deleteBlog(
    blogs : Map.Map<Text, Types.Blog>,
    id : Text,
  ) {
    blogs.remove(id);
  };

  public func listBlogs(
    blogs : Map.Map<Text, Types.Blog>,
  ) : [Types.Blog] {
    blogs.values().toArray();
  };

  public func listPublishedBlogs(
    blogs : Map.Map<Text, Types.Blog>,
  ) : [Types.Blog] {
    blogs.values().filter(func(b) { b.isPublished }).toArray();
  };

  // Testimonials
  public func addTestimonial(
    testimonials : Map.Map<Text, Types.Testimonial>,
    testimonial : Types.Testimonial,
  ) {
    testimonials.add(testimonial.id, testimonial);
  };

  public func listTestimonials(
    testimonials : Map.Map<Text, Types.Testimonial>,
  ) : [Types.Testimonial] {
    testimonials.values().toArray();
  };

  public func deleteTestimonial(
    testimonials : Map.Map<Text, Types.Testimonial>,
    id : Text,
  ) {
    testimonials.remove(id);
  };
};
