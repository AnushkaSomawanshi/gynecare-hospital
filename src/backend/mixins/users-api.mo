import UsersLib "../lib/users";
import UserTypes "../types/users";
import Common "../types/common";
import Map "mo:core/Map";
import AccessControl "mo:caffeineai-authorization/access-control";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

mixin (
  accessControlState : AccessControl.AccessControlState,
  users : Map.Map<Common.UserId, UserTypes.User>,
) {

  public shared ({ caller }) func registerUser(
    name : Text,
    email : Text,
    phone : Text,
    role : Common.UserRole,
    abhaId : ?Text,
  ) : async Text {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in to register");
    };
    let userId = caller.toText();
    // Only allow #patient role for self-registration; admin assigns doctor/admin roles
    let assignedRole : Common.UserRole = switch (role) {
      case (#admin) {
        if (not AccessControl.isAdmin(accessControlState, caller)) {
          Runtime.trap("Unauthorized: Only admins can assign admin role");
        };
        #admin;
      };
      case (#doctor) {
        if (not AccessControl.isAdmin(accessControlState, caller)) {
          Runtime.trap("Unauthorized: Only admins can assign doctor role");
        };
        #doctor;
      };
      case (#patient) { #patient };
    };
    let user : UserTypes.User = {
      id = userId;
      name = name;
      email = email;
      phone = phone;
      role = assignedRole;
      abhaId = abhaId;
      createdAt = Time.now();
    };
    UsersLib.createUser(users, user);
    userId;
  };

  public shared query ({ caller }) func getMyProfile() : async ?UserTypes.User {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    UsersLib.getUser(users, caller.toText());
  };

  public shared ({ caller }) func updateMyProfile(
    name : Text,
    phone : Text,
    abhaId : ?Text,
  ) : async Bool {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    let userId = caller.toText();
    switch (UsersLib.getUser(users, userId)) {
      case null { Runtime.trap("User profile not found") };
      case (?existing) {
        UsersLib.updateUser(users, { existing with name = name; phone = phone; abhaId = abhaId });
        true;
      };
    };
  };

  public shared query ({ caller }) func getUserById(id : Common.UserId) : async ?UserTypes.User {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    UsersLib.getUser(users, id);
  };

  public shared query ({ caller }) func listAllUsers() : async [UserTypes.User] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    UsersLib.listUsers(users);
  };

  public shared query ({ caller }) func listUsersByRole(role : Common.UserRole) : async [UserTypes.User] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    UsersLib.listUsersByRole(users, role);
  };
};
