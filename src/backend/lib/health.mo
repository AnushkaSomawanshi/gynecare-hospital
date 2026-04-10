import Types "../types/health";
import Common "../types/common";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

module {
  // Health Packages
  public func createPackage(
    packages : Map.Map<Text, Types.HealthPackage>,
    pkg : Types.HealthPackage,
  ) {
    packages.add(pkg.id, pkg);
  };

  public func getPackage(
    packages : Map.Map<Text, Types.HealthPackage>,
    id : Text,
  ) : ?Types.HealthPackage {
    packages.get(id);
  };

  public func updatePackage(
    packages : Map.Map<Text, Types.HealthPackage>,
    pkg : Types.HealthPackage,
  ) {
    packages.add(pkg.id, pkg);
  };

  public func listPackages(
    packages : Map.Map<Text, Types.HealthPackage>,
  ) : [Types.HealthPackage] {
    packages.values().toArray();
  };

  // Reports
  public func createReport(
    reports : Map.Map<Text, Types.Report>,
    report : Types.Report,
  ) {
    reports.add(report.id, report);
  };

  public func getReport(
    reports : Map.Map<Text, Types.Report>,
    id : Text,
  ) : ?Types.Report {
    reports.get(id);
  };

  public func listReportsByPatient(
    reports : Map.Map<Text, Types.Report>,
    patientId : Common.UserId,
  ) : [Types.Report] {
    reports.values().filter(func(r) { r.patientId == patientId }).toArray();
  };

  // Pregnancy Tracker
  public func upsertPregnancyData(
    pregnancies : Map.Map<Common.UserId, Types.PregnancyData>,
    data : Types.PregnancyData,
  ) {
    pregnancies.add(data.patientId, data);
  };

  public func getPregnancyData(
    pregnancies : Map.Map<Common.UserId, Types.PregnancyData>,
    patientId : Common.UserId,
  ) : ?Types.PregnancyData {
    pregnancies.get(patientId);
  };

  public func addWeekNote(
    pregnancies : Map.Map<Common.UserId, Types.PregnancyData>,
    patientId : Common.UserId,
    weekNote : Types.WeekNote,
  ) {
    switch (pregnancies.get(patientId)) {
      case null { Runtime.trap("No pregnancy data found") };
      case (?data) {
        // Replace existing note for the week or append
        let existingIdx = data.notes.findIndex(
          func(n) { n.week == weekNote.week },
        );
        let updatedNotes = switch (existingIdx) {
          case null {
            data.notes.concat([weekNote]);
          };
          case (?_) {
            data.notes.map(
              func(n) { if (n.week == weekNote.week) { weekNote } else { n } },
            );
          };
        };
        pregnancies.add(patientId, { data with notes = updatedNotes; lastUpdated = Time.now() });
      };
    };
  };

  // Menstrual Cycle Tracker
  public func addMenstrualCycle(
    cycles : Map.Map<Text, Types.MenstrualCycle>,
    cycle : Types.MenstrualCycle,
  ) {
    cycles.add(cycle.id, cycle);
  };

  public func listMenstrualCyclesByPatient(
    cycles : Map.Map<Text, Types.MenstrualCycle>,
    patientId : Common.UserId,
  ) : [Types.MenstrualCycle] {
    cycles.values().filter(func(c) { c.patientId == patientId }).toArray();
  };

  public func updateMenstrualCycle(
    cycles : Map.Map<Text, Types.MenstrualCycle>,
    cycle : Types.MenstrualCycle,
  ) {
    cycles.add(cycle.id, cycle);
  };
};
