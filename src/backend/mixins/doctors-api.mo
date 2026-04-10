import DoctorsLib "../lib/doctors";
import DoctorTypes "../types/doctors";
import Map "mo:core/Map";
import AccessControl "mo:caffeineai-authorization/access-control";
import Runtime "mo:core/Runtime";

mixin (
  accessControlState : AccessControl.AccessControlState,
  doctors : Map.Map<Text, DoctorTypes.Doctor>,
) {

  public shared ({ caller }) func createDoctor(doctor : DoctorTypes.Doctor) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    DoctorsLib.createDoctor(doctors, doctor);
    true;
  };

  public shared query ({ caller }) func getDoctorById(id : Text) : async ?DoctorTypes.Doctor {
    DoctorsLib.getDoctor(doctors, id);
  };

  public shared ({ caller }) func updateDoctor(doctor : DoctorTypes.Doctor) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    DoctorsLib.updateDoctor(doctors, doctor);
    true;
  };

  public shared ({ caller }) func deleteDoctor(id : Text) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    DoctorsLib.deleteDoctor(doctors, id);
    true;
  };

  public shared query ({ caller }) func listDoctors() : async [DoctorTypes.Doctor] {
    DoctorsLib.listDoctors(doctors);
  };

  public shared query ({ caller }) func listDoctorsBySpeciality(speciality : Text) : async [DoctorTypes.Doctor] {
    DoctorsLib.listDoctorsBySpeciality(doctors, speciality);
  };

  public shared query ({ caller }) func listDoctorsByHospital(hospitalId : Text) : async [DoctorTypes.Doctor] {
    DoctorsLib.listDoctorsByHospital(doctors, hospitalId);
  };

  public shared ({ caller }) func updateSlotAvailability(
    doctorId : Text,
    slotId : Text,
    isAvailable : Bool,
  ) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    DoctorsLib.updateSlotAvailability(doctors, doctorId, slotId, isAvailable);
    true;
  };
};
