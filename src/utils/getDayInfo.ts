import Data from "../../public/schedules.json";

export default function getDayInfo(DayType: string) {
  switch (DayType) {
    case "Conference":
      return Data.Conference.schedule;
    case "Homeroom":
      return Data.Homeroom.schedule;
    case "Extended":
      return Data["Extended Homeroom"].schedule;
    case "Regular":
      return Data.Regular.schedule;
    case "TF":
      return Data["Thurs-Fri"].schedule;
    default:
      return Data.Regular.schedule;
  }
}
