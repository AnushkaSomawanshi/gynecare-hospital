module {
  public type Blog = {
    id : Text;
    title : Text;
    content : Text;
    excerpt : Text;
    category : Text;
    author : Text;
    publishDate : Text;
    imageUrl : ?Text;
    isPublished : Bool;
  };

  public type Testimonial = {
    id : Text;
    patientName : Text;
    content : Text;
    rating : Nat;
    department : Text;
  };
};
