'use client'

// imports
import { useEffect, useState } from "react";
import Image from "next/image";

//utils
import getDayInfo from "@/utils/getDayInfo";
import DayScheduleInterface from '@/utils/DayScheduleInterface';
import getPeriodTimes from "@/utils/getPeriodTimes";

// elements
import Moon from "/public/static/images/Moon.svg";
import Sun from "/public/static/images/Sun.svg";
import SpecificsLine from "/public/static/images/SpecificsLineArt.svg";

// ! TODO: FIX

export default function Specifics(props: DayScheduleInterface[]) {
  const [dayType, setDayTypes] = useState<string[][]>();

  
  return (
    <div className="schedule-specifics">
      <div className="schedule-specifics-box">
        {getPeriodTimes(getDayInfo(dayType)).map((period, index) => {
          return (
            <div className="period-crawler-container" key={index}>
              <div className="period-name">
                {period === currPeriod ? (
                  <div className="period-name-crawler">
                    <span className="decorative">b</span>
                    {period}
                    <span className="decorative">a</span>
                  </div>
                ) : (
                  <div>{period}</div>
                )}
              </div>
              <div className="period-time">{periodTimes[index]}</div>
            </div>
          );
        })}
      </div>
      <Image
        src={Moon}
        alt="Fancical Abstract Drawing of a Moon"
        className="moon-Image"
      />
      <Image
        src={Sun}
        alt="Fancical Abstract Drawing of a Sun"
        className="sun-Image"
      />
      <div className="specifics-line">
        <Image src={SpecificsLine} alt="Decorative Line Art" className="" />
      </div>
      <div className="all-schedules">
        <a
          href="https://stuy.entest.org/2023-2024%20School%20Year%20Calendar%20v%209-4-2023%20v%2011_1__1_.pdf"
          className="all-schedules-link"
        >
          View all schedules
        </a>
      </div>
    </div>
  );
}

