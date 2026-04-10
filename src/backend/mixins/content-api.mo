import ContentLib "../lib/content";
import ContentTypes "../types/content";
import Map "mo:core/Map";
import AccessControl "mo:caffeineai-authorization/access-control";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

mixin (
  accessControlState : AccessControl.AccessControlState,
  blogs : Map.Map<Text, ContentTypes.Blog>,
  testimonials : Map.Map<Text, ContentTypes.Testimonial>,
) {

  // Blogs
  public shared ({ caller }) func createBlog(blog : ContentTypes.Blog) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    ContentLib.createBlog(blogs, blog);
    true;
  };

  public shared query ({ caller }) func getBlogById(id : Text) : async ?ContentTypes.Blog {
    ContentLib.getBlog(blogs, id);
  };

  public shared ({ caller }) func updateBlog(blog : ContentTypes.Blog) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    ContentLib.updateBlog(blogs, blog);
    true;
  };

  public shared ({ caller }) func deleteBlog(id : Text) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    ContentLib.deleteBlog(blogs, id);
    true;
  };

  public shared query ({ caller }) func listPublishedBlogs() : async [ContentTypes.Blog] {
    ContentLib.listPublishedBlogs(blogs);
  };

  public shared query ({ caller }) func listAllBlogs() : async [ContentTypes.Blog] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    ContentLib.listBlogs(blogs);
  };

  // Testimonials
  public shared ({ caller }) func addTestimonial(testimonial : ContentTypes.Testimonial) : async Bool {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    ContentLib.addTestimonial(testimonials, testimonial);
    true;
  };

  public shared query ({ caller }) func listTestimonials() : async [ContentTypes.Testimonial] {
    ContentLib.listTestimonials(testimonials);
  };

  public shared ({ caller }) func deleteTestimonial(id : Text) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    ContentLib.deleteTestimonial(testimonials, id);
    true;
  };
};
