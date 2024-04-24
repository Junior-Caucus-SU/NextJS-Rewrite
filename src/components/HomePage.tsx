"use client"

// stylesheets
import "./Home.css";

// libraries
import React, { useState, useEffect, useRef } from "react";
import Papa from "papaparse";
import Image from "next/image"

// components 
import DateCrawler from "@/components/DateCrawler";
import HomeParallax from "@/components/HomeParallax";
import Schedule from "@/components/Schedule";


//images
import Border from "/public/static/images/BorderImg.svg";
import TribecaBridge from "/public/static/images/StuyBridgeDrawing.png";
import Sun from "/public/static/images/sun.svg";
import Moon from "/public/static/images/moon.svg";
import SpecificsLine from "/public/static/images/SpecificsLineArt.svg";

// data
import Data from "../../public/schedules.json";

//utils
import ScheduleInterface from "@/utils/SchedulesInterface";
import DayScheduleInterface from "@/utils/DayScheduleInterface";
import { ScheduleItemInterface } from "@/utils/SchedulesInterface";


function cSpanning(text: string) {
    return text.split("").map((char: string, index: number) => (
        <span key={index} className="character">
            {char}
        </span>
    ));
}

export default function HomePage() {
    const [minutes, setMinutes] = useState(5); //should be used for the schedule page
    const [currPeriod, setPeriod] = useState(0);
    const [dayType, setDayType] = useState("Regular");
    const [periodDuration, setPeriodDuration] = useState(40);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [AorBDay, setAorBDay] = useState("A");
    //fetch the sheets data

    const getCurrentPeriod = () => {
        const now = new Date();
        now.setHours(now.getHours());
        now.setMinutes(now.getMinutes());
        const schedule = getDayInfo(dayType);
        const periods = getTimes(schedule);
        for (let i = 0; i < periods.length; i++) {
            const start = new Date();
            start.setHours(parseInt(schedule[i].startTime.split(":")[0]));
            start.setMinutes(parseInt(schedule[i].startTime.split(":")[1]));
            const diff = now.getTime() - start.getTime();
            if (diff > 0) {
                setMinutes(diff / 60000);
                setMinutesLeft(schedule[i].duration - diff / 60000);
                setPeriod(Number(periods[i]));
                setPeriodDuration(schedule[i].duration);
            } else {
                break;
            }
        }
    };

    const onScroll = () => {
        if (scRef.current) {
            const { top, bottom } = scRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const isInView = bottom > -200 && bottom < viewportHeight;
            const isOutOfView = bottom <= -200 || top >= viewportHeight;
            if (document.querySelector(".mission-box") !== null) {
                (document.querySelector(".mission-box") as HTMLElement).style.backgroundColor =
                    isInView || !isOutOfView ? "#051e4f" : "#fbe4df";
            }
            if (document.querySelector(".schedule-specifics") !== null) {
                (document.querySelector(".schedule-specifics") as HTMLElement).style.backgroundColor =
                    isInView || !isOutOfView ? "#051e4f" : "#fbe4df";
            }
        }
    };

    const fetchSheetsData = async () => {
        try {
            const ID = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
            const sheet_name = "Schedule";
            const response = await fetch(
                `https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`,
            );
            const text = await response.text();
            const today = new Date();
            const parsedData = (Papa.parse(text, { header: true }).data as DayScheduleInterface[]);
            setDayType(parsedData[today.getDay()].dayType);
            setAorBDay(parsedData[today.getDay()].AorBDay);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        fetchSheetsData();
    }, []);

    //get period
    useEffect(() => {
        //set an interval
        const timer = setInterval(() => {
            getCurrentPeriod();
        }, 1000);
        return () => clearInterval(timer);
    });

    const scRef = useRef<HTMLElement | null>(null);
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        if (
            document.querySelector(".mission-box") &&
            document.querySelector(".schedule-specifics")
        ) {
            (document.querySelector(".mission-box") as HTMLElement).style.backgroundColor = "#051e4f";
            (document.querySelector(".schedule-specifics") as HTMLElement).style.backgroundColor =
                "#051e4f";
        }
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        // parallax effect
        const handleParallax = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // speed of the parallax effect
                    const backgroundSpeedFactor = 0.5;

                    window.addEventListener('scroll', () => {
                        // get window height
                        let windowHeight = window.innerHeight;

                        const scrolled = window.scrollY - (entry.target as HTMLElement).offsetTop - windowHeight / 2;

                        // background position
                        if (document.querySelector('.polaroids-sky') !== null) {
                            (document.querySelector('.polaroids-sky') as HTMLElement).style.backgroundPositionY = `-${scrolled * backgroundSpeedFactor}px`;
                        }
                        if (document.querySelector('.polaroids-bottom') !== null) {
                            (document.querySelector('.polaroids-bottom') as HTMLElement).style.backgroundPositionY = `-${scrolled * backgroundSpeedFactor}px`;
                        }
                    });
                }
            });
        };

        const observer = new IntersectionObserver(handleParallax, { threshold: 0.1 });

        //element to observe
        const target = document.querySelector('.end-scroll');
        if (target !== null) {
            observer.observe(target);
        }
    }, []);



    const dayInfo = {
        dayType,
        minutes,
        minutesLeft,
        currPeriod,
        periodDuration,
        AorBDay,
    };

    const periodTimes = getPeriodTimes(dayType);
    return (
        <>
  
            <div className="homepage-div">
                <div className="homepage-schedule-container">
                    <div className="schedule-banner-container">
                        <div className="schedule-banner">
                        <Schedule {...dayInfo} />
                        </div>
                    </div>
                    <div className="bridge-pos">
                        <Image
                            src={TribecaBridge}
                            alt="Tribeca bridge"
                            className="tribeca-bridge"
                        />
                    </div>
                    <div className="date-crawler-pos">
                        <div className="schedule-date-crawler">
                        <DateCrawler  />
                        </div>
                    </div>
                </div>
                <Image src={Border} alt="Border" className="border1" ref={scRef} />
                <div className="schedule-specifics">
                    <div className="schedule-specifics-box">
                        {getPeriods(getDayInfo(dayType)).map((period, index) => {
                            return (
                                <div className="period-crawler-container" key={index}>
                                    <div className="period-name">
                                        {Number(period) === Number(currPeriod) ? (
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
                        className="moon-img"
                    />
                    <Image
                        src={Sun}
                        alt="Fancical Abstract Drawing of a Sun"
                        className="sun-img"
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
                <div className="mission-box">
                    <h1 className="mission-statement">
                        {cSpanning(
                            "We represent the Junior class body and are dedicated to easing the challenges of junior year by alleviating stress through valuable resources and fun events! We are also prioritizing open communication and transparency from effective team collaboration to fostering clear and consistent communication with the student body!",
                        )}
                    </h1>
                </div>
                <div className="parallax">
                    <HomeParallax />
                </div>
                <div className="end-scroll">
                    <div className="polaroids-sky polaroids polaroid-img"></div>
                    <div className="polaroids-text polaroids polaroid-img">
                        We'll stay with you this year
                    </div>
                    <div className="polaroids-bottom polaroids"></div>
                </div>
            </div>
        </>
    );
}


const getTimes = (schedule: ScheduleItemInterface[]) => {
    let final = [];
    for (let i = 0; i < schedule.length; i++) {
        final.push(schedule[i].name);
    }
    return final;
};



const getPeriods = (schedule: ScheduleItemInterface[]) => {
    let final = [];
    for (let i = 0; i < schedule.length; i++) {
        if (!(schedule[i].name.includes("Before") && i !== 0)) {
            final.push(schedule[i].name);
        }
    }
    return final;
};


function getDayInfo (DayType: string): ScheduleItemInterface[] {
    switch (DayType) {
        case "Conference":
            return Data.Conference.schedule;
        case "Homeroom":
            return Data.Homeroom.schedule;
        case "Extended":
            return Data["Extended Homeroom"].schedule;
        case "Regular":
            return Data.Regular.schedule;
        case "TF":
            return Data["Thurs-Fri"].schedule;
        default:
            return Data.Regular.schedule;
    }
};

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
                    `${start} - ${end.getHours()}:${end.getMinutes() < 10 ? "0" + end.getMinutes() : end.getMinutes()
                    }`,
                );
            }
        }
    }
    return final;
};

const updateCharacterOpacity = () => {
    const chars = document.querySelectorAll(".mission-statement .character");
    const viewportHeight = window.innerHeight;

    chars.forEach((char) => {
        const charRect = char.getBoundingClientRect();
        const charCenter = charRect.top + charRect.height / 2;
        const distanceFromCenter = Math.abs(viewportHeight / 2 - charCenter);
        const opacity = Math.max(0, 1 - (2 * distanceFromCenter) / viewportHeight);
        char.style.opacity = opacity;
    });
};
const handleScroll = () => {
    window.requestAnimationFrame(updateCharacterOpacity);
};

window.addEventListener("scroll", handleScroll);
updateCharacterOpacity();
