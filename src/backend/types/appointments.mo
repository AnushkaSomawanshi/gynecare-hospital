import Common "common";

module {
  public type Appointment = {
    id : Text;
    patientId : Common.UserId;
    doctorId : Text;
    hospitalId : Text;
    department : Text;
    slot : Text;
    date : Text;
    status : Common.AppointmentStatus;
    notes : ?Text;
    createdAt : Common.Timestamp;
  };
};
