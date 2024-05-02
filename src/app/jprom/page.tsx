import Nav from "@/components/Nav";
import "@/styles/JProm.css"
import AnnouncementLine from "/public/static/images/announcementsLine.svg";
import Image from "next/image";
import Papa from "papaparse";
export const revalidate = 3600 // revalidate the data at most every hour


export default async function Jprom() {
    let text = 0;
    try {
        const ID = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
        const sheet_name = "JPPROGRESS";
        const response = await fetch(
            `https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`,
            { cache: 'no-store' }
        );
        text = ((Papa.parse(await response.text()).data as any[][])[1][0] as number);
    } catch (e) {
        console.log(e);
    }

    return (
        <div>
            <Nav page="JProm" />
            <div className="jprom-super">
                <div className="jprom-container">
                    <div className="jprom-description">
                        <div className="header">JProm</div>
                        <Image src={AnnouncementLine} alt="announcement line" className="header-border" />
                        <div className="description">
                            One of the main goal of our team this year is to raise funds for Junior Prom (JProm) that will be happening in the spring. JProm is the highly anticipated event-of-the-year event that acts as a reward for students’ hard work throughout the year. However, in recent years, JProm costs have greatly inflated. Our team strongly believes in the accessibility of this event, and we have decided to make fundraising one of our biggest focuses this year. We have been brainstorming a variety of fundraising events, from polaroid fundraisers to frequent bake sales. Though there is no guarantee that JProm will be fully affordable to all students, we are trying our best to fundraise as much as we can.
                        </div>
                    </div>
                    <div className="funding-goals-container">
                        <div className="progress-bar">
                            <div className="progress-inside" style={{height:`${100 - text}%`, transition: "0.5s linear"}}/>
                        </div>
                        <div className="progress-description">
                            JProm funding requirements!
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}