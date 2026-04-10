import Common "common";

module {
  public type TimeSlot = {
    id : Text;
    day : Text;
    startTime : Text;
    endTime : Text;
    isAvailable : Bool;
  };

  public type Doctor = {
    id : Text;
    userId : Common.UserId;
    name : Text;
    speciality : Text;
    qualifications : Text;
    experience : Nat;
    hospitalIds : [Text];
    availableSlots : [TimeSlot];
    bio : Text;
    rating : Float;
    imageUrl : ?Text;
  };
};
