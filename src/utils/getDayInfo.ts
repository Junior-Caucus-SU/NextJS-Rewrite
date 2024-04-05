import Data from "../../public/schedules.json";
import Schedule from "./SchedulesInterface";

export default function getDayInfo(DayType: string): Schedule {
  switch (DayType) {
    case "Conference":
      return {
        scheduleType: "Conference",
        scheduleName: "Conference Schedule",
        schedule: Data.Conference.schedule,
      };
    case "Homeroom":
      return {
        scheduleType: "Homeroom",
        scheduleName: "Homeroom Schedule",
        schedule: Data.Homeroom.schedule,
      };
    case "Extended":
      return {
        scheduleType: "Extended Homeroom",
        scheduleName: "Extended Homeroom Schedule",
        schedule: Data["Extended Homeroom"].schedule,
      };
    case "Regular":
      return {
        scheduleType: "Regular",
        scheduleName: "Regular Schedule",
        schedule: Data.Regular.schedule,
      };
    case "TF":
      return {
        scheduleType: "Thurs-Fri",
        scheduleName: "Thurs-Fri Schedule",
        schedule: Data["Thurs-Fri"].schedule,
      };
    default:
      return {
        scheduleType: "Regular",
        scheduleName: "Regular Schedule",
        schedule: Data.Regular.schedule,
      };
  }
}
