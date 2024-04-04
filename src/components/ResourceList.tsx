"use client"
import { useEffect, useState } from "react";
import styles from "@/styles/ResourceList.module.css";
import getData from "@/utils/getData";

interface Resource {
    Title: string;
    Link: string;
    Date: string;
}

export default function ResourceList() {
    const [Resources, setResources] = useState<Resource[]>([]);

    useEffect(() => {
        const getSheetsData = async () => {
            let data = await getData("Resources") as Resource[];
            setResources(data.reverse());
        }
        getSheetsData();
    }, []);

    return (
        <div className={styles["resources-container"]}>
            {Resources.map((r: Resource, i: number) => {
                return (
                    <div key={i}>
                        <div className={styles["resource-card-super"]} key={i}>
                            <a href={r["Link"]} className={styles["resource-links"]}>
                                <div className={styles["resource-card-head"]}>
                                    <h1 className={styles["resource-title"]}>{r["Title"]}</h1>
                                    <p className={styles["resource-text"]}>{r["Date"]}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                );
            })}


        </div>
    );
} 