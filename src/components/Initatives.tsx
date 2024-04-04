"use client"
import { useState, useEffect } from "react";
import getData from "@/utils/getData";
import styles from "@/styles/Initatives.module.css";

interface Initiative {
    Date: string;
    Title: string;
    Text: string;
}

export default function Initatives() {
    const [initiativesData, setEventsInfo] = useState<Initiative[]>([]);
    const [showMore, setShowMore] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const parsedData = await getData("Announcements") as Initiative[];
            setEventsInfo(parsedData);
            setShowMore(Array(parsedData.length).fill(false));
        };
        fetchData();
    }, []);

    const handleShowMoreToggle = (index: number) => {
        setShowMore((prevShowMore) => {
            const newShowMore = [...prevShowMore];
            newShowMore[index] = !newShowMore[index];
            return newShowMore;
        });
    };

    return (
        <div className={styles["all-initiatives"]}>
            <div className={styles.frame}>
                {initiativesData.map((initiative: Initiative, index: number) => ( // use any becasue I'm lazy
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
        </div>
    );
}

