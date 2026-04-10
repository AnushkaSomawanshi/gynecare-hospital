import AppointmentsLib "../lib/appointments";
import AppointmentTypes "../types/appointments";
import Common "../types/common";
import Map "mo:core/Map";
import AccessControl "mo:caffeineai-authorization/access-control";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";

mixin (
  accessControlState : AccessControl.AccessControlState,
  appointments : Map.Map<Text, AppointmentTypes.Appointment>,
) {

  var nextAppointmentId : Nat = 0;

  public shared ({ caller }) func bookAppointment(
    doctorId : Text,
    hospitalId : Text,
    department : Text,
    slot : Text,
    date : Text,
    notes : ?Text,
  ) : async Text {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in to book appointment");
    };
    let id = "APPT-" # nextAppointmentId.toText();
    nextAppointmentId += 1;
    let appointment : AppointmentTypes.Appointment = {
      id = id;
      patientId = caller.toText();
      doctorId = doctorId;
      hospitalId = hospitalId;
      department = department;
      slot = slot;
      date = date;
      status = #pending;
      notes = notes;
      createdAt = Time.now();
    };
    AppointmentsLib.createAppointment(appointments, appointment);
    id;
  };

  public shared query ({ caller }) func getAppointmentById(id : Text) : async ?AppointmentTypes.Appointment {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    let appt = appointments.get(id);
    // Allow access to patient, admin, and the doctor of the appointment
    switch (appt) {
      case null { null };
      case (?a) {
        if (
          a.patientId == caller.toText() or
          AccessControl.isAdmin(accessControlState, caller) or
          a.doctorId == caller.toText()
        ) {
          ?a;
        } else {
          Runtime.trap("Unauthorized: Cannot access this appointment");
        };
      };
    };
  };

  public shared ({ caller }) func updateAppointmentStatus(
    id : Text,
    status : Common.AppointmentStatus,
  ) : async Bool {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    // Only admin or the doctor of the appointment can update status
    switch (appointments.get(id)) {
      case null { Runtime.trap("Appointment not found") };
      case (?appt) {
        if (
          not AccessControl.isAdmin(accessControlState, caller) and
          appt.doctorId != caller.toText()
        ) {
          Runtime.trap("Unauthorized: Only admin or assigned doctor can update status");
        };
        AppointmentsLib.updateAppointmentStatus(appointments, id, status);
        true;
      };
    };
  };

  public shared ({ caller }) func cancelAppointment(id : Text) : async Bool {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    switch (appointments.get(id)) {
      case null { Runtime.trap("Appointment not found") };
      case (?appt) {
        if (
          appt.patientId != caller.toText() and
          not AccessControl.isAdmin(accessControlState, caller)
        ) {
          Runtime.trap("Unauthorized: Can only cancel your own appointments");
        };
        AppointmentsLib.cancelAppointment(appointments, id);
        true;
      };
    };
  };

  public shared query ({ caller }) func listMyAppointments() : async [AppointmentTypes.Appointment] {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    AppointmentsLib.listAppointmentsByPatient(appointments, caller.toText());
  };

  public shared query ({ caller }) func listAppointmentsByDoctor(doctorId : Text) : async [AppointmentTypes.Appointment] {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    // Doctor can view their own, admin can view any
    if (
      doctorId != caller.toText() and
      not AccessControl.isAdmin(accessControlState, caller)
    ) {
      Runtime.trap("Unauthorized: Can only view your own appointments as doctor");
    };
    AppointmentsLib.listAppointmentsByDoctor(appointments, doctorId);
  };

  public shared query ({ caller }) func listAllAppointments() : async [AppointmentTypes.Appointment] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    AppointmentsLib.listAllAppointments(appointments);
  };
};
