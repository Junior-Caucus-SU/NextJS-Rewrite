import Nav from "@/components/Nav";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import "@/styles/Events.css";
import AnnouncementLine from "/public/static/images/announcementsLine.svg";
import Initatives from "@/components/Initatives";

export default function Events() {
    return (<div>
        <div className="events-page">
            <Nav page="Events" />
            <Carousel />
            <div className="events-body">
                <div className="all-initiatives-header">
                    <h1 className="title">All Initiatives</h1>
                    <Image className="vector" alt="line" src={AnnouncementLine} />
                </div>
                <div className="all-initiatives-flexbox">
                    <Initatives />
                </div>
            </div>
        </div>
    </div>);
}