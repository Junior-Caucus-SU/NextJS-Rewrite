import Image from "next/image";
import styles from "/page.module.css";
import Nav from "@/components/Nav"
export const revalidate = 10;

export default function Home() {
  return (
    <div>
      <Nav page="Home" />
    </div>
  );
}
