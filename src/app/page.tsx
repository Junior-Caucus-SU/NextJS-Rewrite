import Image from "next/image";
import "@/styles/Home.css";
import Nav from "@/components/Nav";
import getData from "@/utils/getData";
import DayScheduleInterface from "@/utils/DayScheduleInterface";

export const revalidate = 3600;


export default async function Home() {
  let data = await getData("Schedule") as DayScheduleInterface[];

  return (
    <div>
      <Nav page="Home" />
    </div>
  );
}
