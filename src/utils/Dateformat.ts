type TimeOption = "numeric" | "2-digit"
type DateOption = "long" | "short" | "narrow";


const dateFormat = {
  longWK: {
    weekday: "long" as DateOption,
    month: "long" as DateOption,
    day: "numeric" as TimeOption
  },
  shortWK: { weekday: "short" as DateOption },
  timeHMS: {
    hour: "2-digit" as TimeOption,
    minute: "2-digit" as TimeOption,
    second: "2-digit" as TimeOption,
    hour12: false,
  },
};

export default dateFormat;