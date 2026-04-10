import Common "common";

module {
  public type User = {
    id : Common.UserId;
    name : Text;
    email : Text;
    phone : Text;
    role : Common.UserRole;
    abhaId : ?Text;
    createdAt : Common.Timestamp;
  };
};
