import Common "common";

module {
  public type HealthPackage = {
    id : Text;
    name : Text;
    price : Nat;
    tests : [Text];
    description : Text;
    category : Text;
    isActive : Bool;
  };

  public type Report = {
    id : Text;
    patientId : Common.UserId;
    doctorId : Text;
    fileRef : Text;
    fileName : Text;
    reportType : Text;
    date : Text;
    notes : ?Text;
  };

  public type WeekNote = {
    week : Nat;
    note : Text;
    scanImageRef : ?Text;
  };

  public type PregnancyData = {
    id : Text;
    patientId : Common.UserId;
    currentWeek : Nat;
    startDate : Text;
    notes : [WeekNote];
    lastUpdated : Common.Timestamp;
  };

  public type MenstrualCycle = {
    id : Text;
    patientId : Common.UserId;
    startDate : Text;
    cycleLength : Nat;
    symptoms : [Text];
    notes : ?Text;
  };
};
