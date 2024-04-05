export interface ScheduleItem {
    name: string;
    startTime: string;
    duration: number;
  }
  
export default interface Schedule {
    scheduleType: string;
    scheduleName: string;
    schedule: ScheduleItem[];
  }
  
export interface Schedules {
    Regular: Schedule;
    Conference: Schedule;
    Homeroom: Schedule;
    ["Extended Homeroom"]: Schedule;
    ["Thurs-Fri"]: Schedule;
    // Add other schedule types here as needed
  }