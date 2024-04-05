import Schedule from "./SchedulesInterface";

export default function getTimes(schedule: Schedule): string[]{
    let final: string[] = [];
    for (let i = 0; i < schedule.schedule.length; i++) {
        final.push(schedule.schedule[i]?.name);
    }
    return final;
}
