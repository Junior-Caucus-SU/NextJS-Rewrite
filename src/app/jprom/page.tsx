import Nav from "@/components/Nav";
import "@/styles/JProm.css"
import AnnouncementLine from "/public/static/images/announcementsLine.svg";
import Image from "next/image";

export default function Jprom(){
    return (
        <div>
            <Nav page="JProm"/>
            <div className="jprom-super">
                <div className = "jprom-container">
                    <div className="header">JProm</div>
                    <Image src={AnnouncementLine} alt="announcement line" className="header-border" />
                    <div className = "description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="funding-goals-container">
                        <div className = "progress-bar">
                            <div className="progress-inside">

                            </div>
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