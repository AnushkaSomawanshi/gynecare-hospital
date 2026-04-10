module {
  public type Hospital = {
    id : Text;
    name : Text;
    address : Text;
    city : Text;
    state : Text;
    phone : Text;
    emergency : Text;
    facilities : [Text];
    doctorIds : [Text];
    imageUrl : ?Text;
  };
};
