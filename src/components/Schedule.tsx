"use client"
import React, { useState, useMemo, useEffect } from "react";
import "@/styles/Schedule.css";
import dateFormat from '@/utils/Dateformat';

interface SchedulePropsInterface {
  dayType: string,
  minutes: number,
  minutesLeft: number,
  currPeriod: string,
  periodDuration: number,
  AorBDay: string,
}

export default function ScheduleBanner(props: SchedulePropsInterface) {
  const [timeString, setTimeString] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [dateString, setDateString] = useState("");
  const [timeCircleClassName, setTimeCircleClassName] = useState("");
  const [isWeekend, setIsWeekend] = useState(false);


  useEffect(() => {
    // Update currentDateTime on client-side after component has been mounted
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    },
      1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeString(currentDateTime.toLocaleTimeString(
      "en-US",
      dateFormat.timeHMS,
    ));
    setDateString(currentDateTime.toLocaleDateString(
      "en-US",
      dateFormat.longWK,
    ))
    setIsWeekend(currentDateTime.getDay() === 0 || currentDateTime.getDay() === 6)
    setTimeCircleClassName(isWeekend ? "time-circle hide" : "time-circle");
  }, [currentDateTime, isWeekend])

  const circumference = 2 * Math.PI * 50;
  const progress = isWeekend ? 0 : props.minutes / (props.periodDuration || 1);
  const strokeDashoffset = circumference * (1 - progress);
  const text = isWeekend ? "Weekend" : `${props.dayType} ${props.AorBDay}`;

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
              <React.Fragment>
                {Math.round(Number(props.minutes))}
                <br />
                {Math.round(Number(props.minutesLeft))}
              </React.Fragment>
            )}
          </span>
        </div>
        <div className="time-period">
          <span className="time">{timeString}</span>
          <div className="period-container">
            <span className="period interactable">
              {isWeekend ? "No School" : String(props.currPeriod)}
            </span>
            <span
              className={`period dupe interactable ${Number(text.length) > 10 ? "large-schedule-text" : ""
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
