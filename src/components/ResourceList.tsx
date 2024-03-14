"use client"
import { useEffect, useState } from "react";
import styles from "@/styles/ResourceList.module.css";


export default function ResourceList() {

    const [Resources, setResources] = useState<String[][]>([]);
    useEffect(() => {
        const fetchSheetsData = async () => {
            try {
                const ID = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
                const sheet_name = "Resources";
                const response = await fetch(
                    `https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`,
                );
                const text = await response.text();
                let data = text.split("\n").map((x) => {
                    return x.replaceAll('"', "").split(",");
                });
                data.shift();
                setResources(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchSheetsData();
    }, []);

    return (
        <div className={styles["resources-container"]}>
            {Resources.map((resource, i) => (
                <div className={styles["resource-card-super"]} key={i}>
                    <a href={resource[2][0]} className={styles["resource-links"]}>
                        <div className={styles["resource-card-head"]}>
                            <h1 className={styles["resource-title"]}>{resource[0]}</h1>
                            <p className={styles["resource-text"]}>{resource[3]}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
} 