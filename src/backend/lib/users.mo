import Types "../types/users";
import Common "../types/common";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Time "mo:core/Time";

module {
  public func createUser(
    users : Map.Map<Common.UserId, Types.User>,
    user : Types.User,
  ) {
    users.add(user.id, user);
  };

  public func getUser(
    users : Map.Map<Common.UserId, Types.User>,
    id : Common.UserId,
  ) : ?Types.User {
    users.get(id);
  };

  public func getUserByEmail(
    users : Map.Map<Common.UserId, Types.User>,
    email : Text,
  ) : ?Types.User {
    users.values().find(func(u) { u.email == email });
  };

  public func updateUser(
    users : Map.Map<Common.UserId, Types.User>,
    user : Types.User,
  ) {
    users.add(user.id, user);
  };

  public func listUsers(
    users : Map.Map<Common.UserId, Types.User>,
  ) : [Types.User] {
    users.values().toArray();
  };

  public func listUsersByRole(
    users : Map.Map<Common.UserId, Types.User>,
    role : Common.UserRole,
  ) : [Types.User] {
    users.values().filter(func(u) { u.role == role }).toArray();
  };
};
