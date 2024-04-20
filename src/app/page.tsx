// styles
import "@/styles/Home.css";

//components
import Nav from "@/components/Nav";
import Schedule from "@/components/Schedule";
import DateCrawler from "@/components/DateCrawler";
import Specifics from "@/components/Specifics";
import HomeParallax from "@/components/HomeParallax";

// utils and data
import Image from "next/image";
import getData from "@/utils/getData";
import DayScheduleInterface from "@/utils/DayScheduleInterface";

// images
import Border from "/public/static/images/BorderImg.svg";
import TribecaBridge from "/public/static/images/StuyBridgeDrawing.png"

export const revalidate = 3600;

// ! TODO: FIX


function cSpanning(text) {
  return text.split("").map((char, index) => (
    <span key={index} className="character">
      {char}
    </span>
  ));
}


export default async function Home() {
  let data = await getData("Schedule") as DayScheduleInterface[];

  return (
    <>
      <div className="homepage-div">
        <div>
          <Nav page="Home" />
        </div>
        <div className="homepage-schedule-container">
          <div className="schedule-banner-container">
            <div className="schedule-banner">
              <Schedule {...data} />
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
              <DateCrawler {...data} />
            </div>
          </div>
        </div>
        <Image src={Border} alt="Border" className="border1" />
        <Specifics />
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
          <div className="polaroids-sky polaroids polaroid-Image"></div>
          <div className="polaroids-text polaroids polaroid-Image">
            We'll stay with you this year
          </div>
          <div className="polaroids-bottom polaroids"></div>
        </div>
      </div>
    </>
  );
}


