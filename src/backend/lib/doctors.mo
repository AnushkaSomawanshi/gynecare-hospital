import Types "../types/doctors";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

module {
  public func createDoctor(
    doctors : Map.Map<Text, Types.Doctor>,
    doctor : Types.Doctor,
  ) {
    doctors.add(doctor.id, doctor);
  };

  public func getDoctor(
    doctors : Map.Map<Text, Types.Doctor>,
    id : Text,
  ) : ?Types.Doctor {
    doctors.get(id);
  };

  public func updateDoctor(
    doctors : Map.Map<Text, Types.Doctor>,
    doctor : Types.Doctor,
  ) {
    doctors.add(doctor.id, doctor);
  };

  public func deleteDoctor(
    doctors : Map.Map<Text, Types.Doctor>,
    id : Text,
  ) {
    doctors.remove(id);
  };

  public func listDoctors(
    doctors : Map.Map<Text, Types.Doctor>,
  ) : [Types.Doctor] {
    doctors.values().toArray();
  };

  public func listDoctorsBySpeciality(
    doctors : Map.Map<Text, Types.Doctor>,
    speciality : Text,
  ) : [Types.Doctor] {
    doctors.values().filter(func(d) { d.speciality == speciality }).toArray();
  };

  public func listDoctorsByHospital(
    doctors : Map.Map<Text, Types.Doctor>,
    hospitalId : Text,
  ) : [Types.Doctor] {
    doctors.values().filter(func(d) {
      d.hospitalIds.any(func(hid) = hid == hospitalId)
    }).toArray();
  };

  public func updateSlotAvailability(
    doctors : Map.Map<Text, Types.Doctor>,
    doctorId : Text,
    slotId : Text,
    isAvailable : Bool,
  ) {
    switch (doctors.get(doctorId)) {
      case null { Runtime.trap("Doctor not found") };
      case (?doc) {
        let updatedSlots = doc.availableSlots.map(
          func(slot) {
            if (slot.id == slotId) { { slot with isAvailable = isAvailable } } else { slot };
          },
        );
        doctors.add(doctorId, { doc with availableSlots = updatedSlots });
      };
    };
  };
};
