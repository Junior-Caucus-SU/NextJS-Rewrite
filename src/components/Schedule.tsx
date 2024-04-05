'use client'
import { useMemo, useEffect, useState } from 'react';
import styles from "@/styles/Schedule.module.css";
import DayScheduleInterface from '@/utils/DayScheduleInterface';
import dateFormat from '@/utils/Dateformat';
import getPeriodTimes from '@/utils/getPeriodTimes';

export default function Schedule(props: DayScheduleInterface[]) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [minutes, setMinutes] = useState(0);
  const [period, cangePeriod] = useState("Before School");
  const [periodDuration, setPeriodDuration] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(40);

  useEffect(() => {
    setInterval(() => {
      const data = getPeriodTimes(props[currentDateTime.getDay()].dayType);
      cangePeriod(data.period);
      setMinutes(minutes);
      setPeriodDuration(periodDuration);
    }, 1000)
  }, [minutes, period, currentDateTime, props, periodDuration])

  useEffect(() => {
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isWeekend = useMemo(
    () => currentDateTime.getDay() === 0 || currentDateTime.getDay() === 6,
    [currentDateTime],
  );
  const timeCircleClassName = isWeekend ? "time-circle hide" : "time-circle";
  const timeString = currentDateTime.toLocaleTimeString(
    "en-US",
    dateFormat.timeHMS,
  );
  const dateString = currentDateTime.toLocaleDateString(
    "en-US",
    dateFormat.longWK,
  );

  const circumference = 2 * Math.PI * 50;
  const progress = isWeekend ? 0 : minutes / (periodDuration || 1);
  const strokeDashoffset = circumference * (1 - progress);
  const text = isWeekend ? "Weekend" : `${props[currentDateTime.getDay()].dayType} ${props[currentDateTime.getDay()].AorBDay}`;

  return (
    <div className="schedule-banner">
      <div className="top-row">
        <span>{`${dateString}`}</span>
      </div>
      <div className="bottom-row">
        <div className={timeCircleClassName}>
          <svg className="progress-ring" width="140" height="140">
            <circle
              cx="70"
              cy="70"
              r="54"
              stroke="#004085"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: "stroke-dashoffset 0.5s linear" }}
            />
          </svg>
          <span className="timer">
            {isWeekend ? (
              "0/0"
            ) : (
              <>
                {Math.round(minutes)}
                <br />
                {Math.round(minutesLeft)}
              </>
            )}
          </span>
        </div>
        <div className={styles["time-period"]}>
          <span className={styles.time}>{timeString}</span>
          <div className={styles["period-container"]}>
            <span className={`${styles.period} ${styles.interactable}`}>
              {isWeekend ? "No School" : period}
            </span>
            <span
              className={`${styles.period} ${styles.dupe} ${styles.interactable} ${text.length > 10 ? styles["large-schedule-text"] : ""
                }`}
            >
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
