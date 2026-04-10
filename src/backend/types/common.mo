module {
  public type UserId = Text;
  public type Timestamp = Int;

  public type UserRole = {
    #patient;
    #doctor;
    #admin;
  };

  public type AppointmentStatus = {
    #pending;
    #confirmed;
    #completed;
    #cancelled;
  };
};
