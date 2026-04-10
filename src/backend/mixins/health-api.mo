import HealthLib "../lib/health";
import HealthTypes "../types/health";
import Common "../types/common";
import Map "mo:core/Map";
import AccessControl "mo:caffeineai-authorization/access-control";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";

mixin (
  accessControlState : AccessControl.AccessControlState,
  packages : Map.Map<Text, HealthTypes.HealthPackage>,
  reports : Map.Map<Text, HealthTypes.Report>,
  pregnancies : Map.Map<Common.UserId, HealthTypes.PregnancyData>,
  cycles : Map.Map<Text, HealthTypes.MenstrualCycle>,
) {

  var nextReportId : Nat = 0;
  var nextCycleId : Nat = 0;

  // Health Packages
  public shared ({ caller }) func createHealthPackage(pkg : HealthTypes.HealthPackage) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    HealthLib.createPackage(packages, pkg);
    true;
  };

  public shared query ({ caller }) func getHealthPackage(id : Text) : async ?HealthTypes.HealthPackage {
    HealthLib.getPackage(packages, id);
  };

  public shared ({ caller }) func updateHealthPackage(pkg : HealthTypes.HealthPackage) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    HealthLib.updatePackage(packages, pkg);
    true;
  };

  public shared query ({ caller }) func listHealthPackages() : async [HealthTypes.HealthPackage] {
    HealthLib.listPackages(packages);
  };

  // Reports
  public shared ({ caller }) func uploadReport(report : HealthTypes.Report) : async Bool {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    // Only allow uploading reports for self (patient) or admin/doctor
    if (
      report.patientId != caller.toText() and
      not AccessControl.isAdmin(accessControlState, caller)
    ) {
      Runtime.trap("Unauthorized: Cannot upload report for another patient");
    };
    HealthLib.createReport(reports, report);
    true;
  };

  public shared query ({ caller }) func getReport(id : Text) : async ?HealthTypes.Report {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    switch (HealthLib.getReport(reports, id)) {
      case null { null };
      case (?r) {
        if (
          r.patientId == caller.toText() or
          AccessControl.isAdmin(accessControlState, caller)
        ) {
          ?r;
        } else {
          Runtime.trap("Unauthorized: Cannot access this report");
        };
      };
    };
  };

  public shared query ({ caller }) func listMyReports() : async [HealthTypes.Report] {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    HealthLib.listReportsByPatient(reports, caller.toText());
  };

  // Pregnancy Tracker
  public shared ({ caller }) func upsertPregnancyData(
    currentWeek : Nat,
    startDate : Text,
  ) : async Bool {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    let patientId = caller.toText();
    let existing = HealthLib.getPregnancyData(pregnancies, patientId);
    let notes = switch (existing) {
      case null { [] };
      case (?d) { d.notes };
    };
    let data : HealthTypes.PregnancyData = {
      id = patientId;
      patientId = patientId;
      currentWeek = currentWeek;
      startDate = startDate;
      notes = notes;
      lastUpdated = Time.now();
    };
    HealthLib.upsertPregnancyData(pregnancies, data);
    true;
  };

  public shared query ({ caller }) func getMyPregnancyData() : async ?HealthTypes.PregnancyData {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    HealthLib.getPregnancyData(pregnancies, caller.toText());
  };

  public shared ({ caller }) func addWeekNote(
    week : Nat,
    note : Text,
    scanImageRef : ?Text,
  ) : async Bool {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    let weekNote : HealthTypes.WeekNote = {
      week = week;
      note = note;
      scanImageRef = scanImageRef;
    };
    HealthLib.addWeekNote(pregnancies, caller.toText(), weekNote);
    true;
  };

  // Menstrual Cycle Tracker
  public shared ({ caller }) func addMenstrualCycle(
    startDate : Text,
    cycleLength : Nat,
    symptoms : [Text],
    notes : ?Text,
  ) : async Text {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    let id = "CYC-" # nextCycleId.toText();
    nextCycleId += 1;
    let cycle : HealthTypes.MenstrualCycle = {
      id = id;
      patientId = caller.toText();
      startDate = startDate;
      cycleLength = cycleLength;
      symptoms = symptoms;
      notes = notes;
    };
    HealthLib.addMenstrualCycle(cycles, cycle);
    id;
  };

  public shared query ({ caller }) func listMyMenstrualCycles() : async [HealthTypes.MenstrualCycle] {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    HealthLib.listMenstrualCyclesByPatient(cycles, caller.toText());
  };

  public shared ({ caller }) func updateMenstrualCycle(cycle : HealthTypes.MenstrualCycle) : async Bool {
    if (caller == Principal.anonymous()) {
      Runtime.trap("Must be logged in");
    };
    if (cycle.patientId != caller.toText() and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only update your own cycles");
    };
    HealthLib.updateMenstrualCycle(cycles, cycle);
    true;
  };
};
