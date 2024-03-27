"use client"
import { useState, useEffect } from "react";
import styles from "@/styles/Initatives.module.css";
import Papa from "papaparse";

export default function Initatives() {
    const [initiativesData, setEventsInfo] = useState<unknown[] | undefined>([]);
    const [showMore, setShowMore] = useState<any[]>([]);
    useEffect(() => {
        const fetchSheetsData = async () => {
          try {
            const ID = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
            const sheet_name = "Announcements";
            const response = await fetch(
              `https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`,
            );
            const text = await response.text();
            const parsedData = Papa.parse(text, { header: true }).data.reverse();
            setEventsInfo(parsedData);
            setShowMore(Array(parsedData.length).fill(false));
          } catch (err) {
            console.log(err);
          }
        };
        fetchSheetsData();
      }, []);

    const handleShowMoreToggle = (index: number) => {
        setShowMore((prevShowMore) => {
            const newShowMore = [...prevShowMore];
            newShowMore[index] = !newShowMore[index];
            return newShowMore;
        });
    };
    let data = (
        <div className={styles.frame}>
        </div>
    );
    console.log(initiativesData);
    if (initiativesData !== undefined) {
        data = (
            <div className={styles.frame}>
                {initiativesData.map((initiative: any, index: number) => ( // use any becasue I'm lazy
                    <div className={styles.event} key={index}>
                        <p className={styles["event-date"]}>{initiative.Date}</p>
                        <h4 className={styles["event-title"]}>{initiative.Title}</h4>
                        <p className={styles["event-text"]}>
                            {showMore[index] ? initiative.Text : initiative.Text.substring(0, 100)}
                        </p>
                        {showMore[index] ? (
                            <button
                                className={styles["show-more"]}
                                onClick={() => handleShowMoreToggle(index)}
                            >
                                {showMore[index] ? "Show Less" : "Show More..."}
                            </button>
                        ) : null}
                    </div>
                ))}

            </div>
        );
    }

    return (
        <div className={styles["all-initiatives"]}>
            {data}
        </div>
    );
}

