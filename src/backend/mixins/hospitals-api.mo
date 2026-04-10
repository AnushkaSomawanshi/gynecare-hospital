import HospitalsLib "../lib/hospitals";
import HospitalTypes "../types/hospitals";
import Map "mo:core/Map";
import AccessControl "mo:caffeineai-authorization/access-control";
import Runtime "mo:core/Runtime";

mixin (
  accessControlState : AccessControl.AccessControlState,
  hospitals : Map.Map<Text, HospitalTypes.Hospital>,
) {

  public shared ({ caller }) func createHospital(hospital : HospitalTypes.Hospital) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    HospitalsLib.createHospital(hospitals, hospital);
    true;
  };

  public shared query ({ caller }) func getHospitalById(id : Text) : async ?HospitalTypes.Hospital {
    HospitalsLib.getHospital(hospitals, id);
  };

  public shared ({ caller }) func updateHospital(hospital : HospitalTypes.Hospital) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    HospitalsLib.updateHospital(hospitals, hospital);
    true;
  };

  public shared ({ caller }) func deleteHospital(id : Text) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    HospitalsLib.deleteHospital(hospitals, id);
    true;
  };

  public shared query ({ caller }) func listHospitals() : async [HospitalTypes.Hospital] {
    HospitalsLib.listHospitals(hospitals);
  };

  public shared query ({ caller }) func listHospitalsByCity(city : Text) : async [HospitalTypes.Hospital] {
    HospitalsLib.listHospitalsByCity(hospitals, city);
  };
};
