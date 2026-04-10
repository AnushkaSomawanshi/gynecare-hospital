import Types "../types/hospitals";
import Map "mo:core/Map";
import Iter "mo:core/Iter";

module {
  public func createHospital(
    hospitals : Map.Map<Text, Types.Hospital>,
    hospital : Types.Hospital,
  ) {
    hospitals.add(hospital.id, hospital);
  };

  public func getHospital(
    hospitals : Map.Map<Text, Types.Hospital>,
    id : Text,
  ) : ?Types.Hospital {
    hospitals.get(id);
  };

  public func updateHospital(
    hospitals : Map.Map<Text, Types.Hospital>,
    hospital : Types.Hospital,
  ) {
    hospitals.add(hospital.id, hospital);
  };

  public func deleteHospital(
    hospitals : Map.Map<Text, Types.Hospital>,
    id : Text,
  ) {
    hospitals.remove(id);
  };

  public func listHospitals(
    hospitals : Map.Map<Text, Types.Hospital>,
  ) : [Types.Hospital] {
    hospitals.values().toArray();
  };

  public func listHospitalsByCity(
    hospitals : Map.Map<Text, Types.Hospital>,
    city : Text,
  ) : [Types.Hospital] {
    hospitals.values().filter(func(h) { h.city == city }).toArray();
  };
};
