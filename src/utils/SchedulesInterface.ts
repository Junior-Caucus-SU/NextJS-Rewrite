export interface ScheduleItemInterface {
    name: string;
    startTime: string;
    duration: number;
  }
  
export default interface ScheduleInterface {
    scheduleType: string;
    scheduleName: string;
    schedule: ScheduleItemInterface[];
  }
  
export interface SchedulesInterface {
    Regular: ScheduleInterface;
    Conference: ScheduleInterface;
    Homeroom: ScheduleInterface;
    ["Extended Homeroom"]: ScheduleInterface;
    ["Thurs-Fri"]: ScheduleInterface;
    // Add other schedule types here as needed
  }