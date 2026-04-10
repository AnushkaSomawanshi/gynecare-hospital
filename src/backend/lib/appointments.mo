import Types "../types/appointments";
import Common "../types/common";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

module {
  public func createAppointment(
    appointments : Map.Map<Text, Types.Appointment>,
    appointment : Types.Appointment,
  ) {
    appointments.add(appointment.id, appointment);
  };

  public func getAppointment(
    appointments : Map.Map<Text, Types.Appointment>,
    id : Text,
  ) : ?Types.Appointment {
    appointments.get(id);
  };

  public func updateAppointmentStatus(
    appointments : Map.Map<Text, Types.Appointment>,
    id : Text,
    status : Common.AppointmentStatus,
  ) {
    switch (appointments.get(id)) {
      case null { Runtime.trap("Appointment not found") };
      case (?appt) {
        appointments.add(id, { appt with status = status });
      };
    };
  };

  public func cancelAppointment(
    appointments : Map.Map<Text, Types.Appointment>,
    id : Text,
  ) {
    switch (appointments.get(id)) {
      case null { Runtime.trap("Appointment not found") };
      case (?appt) {
        appointments.add(id, { appt with status = #cancelled });
      };
    };
  };

  public func listAppointmentsByPatient(
    appointments : Map.Map<Text, Types.Appointment>,
    patientId : Common.UserId,
  ) : [Types.Appointment] {
    appointments.values().filter(func(a) { a.patientId == patientId }).toArray();
  };

  public func listAppointmentsByDoctor(
    appointments : Map.Map<Text, Types.Appointment>,
    doctorId : Text,
  ) : [Types.Appointment] {
    appointments.values().filter(func(a) { a.doctorId == doctorId }).toArray();
  };

  public func listAllAppointments(
    appointments : Map.Map<Text, Types.Appointment>,
  ) : [Types.Appointment] {
    appointments.values().toArray();
  };
};
