import getDayInfo from "./getDayInfo";
import getTimes from "./getTimes";

export default function getPeriodTimes(dayType: string) {
  const now = new Date();
  now.setHours(now.getHours());
  now.setMinutes(now.getMinutes());
  const schedule = getDayInfo(dayType);
  const periods = getTimes(schedule);
  for (let i = 0; i < periods.length; i++) {
    const start = new Date();
    start.setHours(parseInt(schedule.schedule[i].startTime.split(":")[0]));
    start.setMinutes(parseInt(schedule.schedule[i].startTime.split(":")[1]));
    const diff = now.getTime() - start.getTime();
    if (diff > 0) {
      let minutes = schedule.schedule[i].duration - diff / 60000;
      let period = periods[i];
      let periodDuration = schedule.schedule[i].duration;
      let minutesLeft = schedule.schedule[i].duration - diff / 60000;
      return { period, minutes, periodDuration, minutesLeft };
    } else {
      break;
    }
  }
  return { period: "Before School", minutes: 0, periodDuration: 0, minutesLeft: 0};
}
