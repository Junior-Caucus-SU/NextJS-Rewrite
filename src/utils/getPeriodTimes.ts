import getDayInfo from "./getDayInfo";

const getPeriodTimes = (DayType: string) => {
  const info = getDayInfo(DayType);
  let final = [];
  for (let i = 0; i < info.length; i++) {
    if (!(info[i].name.includes("Before") && i !== 0)) {
      if (i === 0) {
        final.push(`Before ${info[i + 1].startTime}`);
      } else if (i === info.length - 1) {
        final.push(`After ${info[i].startTime}`);
      } else {
        const start = info[i].startTime;
        const end = new Date();
        end.setHours(parseInt(start.split(":")[0]));
        end.setMinutes(parseInt(start.split(":")[1]) + info[i].duration);
        final.push(
          `${start} - ${end.getHours()}:${
            end.getMinutes() < 10 ? "0" + end.getMinutes() : end.getMinutes()
          }`
        );
      }
    }
  }
  return final;
};
