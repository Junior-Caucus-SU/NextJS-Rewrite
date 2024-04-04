import Image from "next/image";
import "@/styles/Home.css";
import Nav from "@/components/Nav";
import getData from "@/utils/getData";

export const revalidate = 3600;

interface Day_Schedule {
  Date: string;
  DayType: string;
  Schedule: string;
}

export default async function Home() {
  let data = await getData("Schedule") as Day_Schedule[];

  return (
    <div>
      <Nav page="Home" />
    </div>
  );
}
