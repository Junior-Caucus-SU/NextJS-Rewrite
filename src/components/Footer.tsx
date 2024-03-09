import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import InstagramLogoSvg from "/public/static/images/instagram.svg";
import FacebookLogoSvg from "/public/static/images/facebook.svg";
import StuyvesantHSLogoPng from "/public/static/images/stuyvesant.png";

export default function Footer() {
    return (
        <div className={styles["footer-banner"]}>
            <div className={styles["footer-content"]}>
                <div className={styles["icons-container"]}>
                    <div className={styles.icons}>
                        <a
                            href="https://www.instagram.com/stuyjuniorcaucus/?hl=en"
                            className={styles["logo-ref"]}
                        >
                            <Image
                                className={`${styles["instagram-logo"]} ${styles["footer-logo-top"]}`}
                                src={InstagramLogoSvg}
                                alt="Instagram logo"
                            />
                        </a>
                    </div>
                    <div className={styles.icons}>
                        <a
                            href="https://www.facebook.com/StuyJuniorCaucus"
                            className={styles["logo-ref"]}
                        >
                            <Image
                                className={`${styles["facebook-logo"]} ${styles["footer-logo-top"]}`}
                                src={FacebookLogoSvg}
                                alt="Facebook logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.names}>
                <div className={styles["footer-people"]}>
                    <span className={styles["positions-title"]}>Design Lead</span>{" "}
                    <div className={styles["positions-people"]}>
                        <a
                            href="https://github.com/willpill"
                            className={`${styles["name-link"]} ${styles["will-zhang"]}`}
                        >
                            Will Zhang
                        </a>
                    </div>
                </div>
                <div className={styles["footer-people"]}>
                    <span className={styles["positions-title"]}>Development Lead</span>{" "}
                    <div className={styles["positions-people"]}>
                        <a
                            href="https://github.com/Elias2660"
                            className={`${styles["name-link"]} ${styles["elias-xu"]}`}
                        >
                            Elias Xu
                        </a>
                    </div>
                </div>
                <div className={styles["footer-people"]}>
                    <span className={styles["positions-title"]}>Website Team</span>{" "}
                    <div className={styles["positions-people"]}>
                        <a
                            href="https://github.com/yellowstonepark"
                            className={`${styles["name-link"]} ${styles["otzar-jaffe"]}`}
                        >
                            Otzar Jaffe
                        </a>
                        ,{" "}
                        <a
                            href="https://github.com/connor132435"
                            className={`${styles["name-link"]} ${styles["connor-yau"]}`}
                        >
                            Connor Yau
                        </a>
                        ,{" "}
                        <a
                            href="https://github.com/muff1n0"
                            className={`${styles["name-link"]} ${styles["tony-chen"]}`}
                        >
                            Tony Chen
                        </a>
                        <br />
                    </div>
                </div>
                <div className={styles["footer-people"]}>
                    <span className={styles["positions-title"]}>Illustration</span>
                    <div className={styles["positions-people"]}>
                        <a
                            href="https://www.instagram.com/chloepwong/"
                            className={styles["name-link"]}
                        >
                            Chloe Wong
                        </a>
                        ,{" "}
                        <a className={styles["name-link"]} href="https://www.instagram.com/vicki.cn/">
                            Vicki Chen
                        </a>
                    </div>
                </div>
                <div className={styles["footer-people"]}>
                    <span className={styles["positions-title"]}>Special Thanks</span>{" "}
                    <div className={styles["positions-people"]}>
                        <a href="https://github.com/TheEgghead27" className={styles["name-link"]}>
                            David Chen
                        </a>
                    </div>
                </div>
            </div>
            <br />
            <div className={styles.leadership}>
                The{" "}
                <a
                    href="https://www.instagram.com/stuyjuniorcaucus/"
                    className={styles["name-link"]}
                >
                    Junior Caucus
                </a>{" "}
                is led by{" "}
                <a
                    href="https://www.instagram.com/josephineyoo_/"
                    className={styles["name-link"]}
                >
                    Josephine Yoo
                </a>{" "}
                &{" "}
                <a href="https://www.instagram.com/grace.rhee/" className={styles["name-link"]}>
                    Grace Rhee
                </a>
                .{" "}
            </div>

            <div className={styles.leadership}>
                Chiefs of Staff{" "}
                <a href="https://www.instagram.com/johnjayw_/" className={styles["name-link"]}>
                    John Jay Wang
                </a>{" "}
                &{" "}
                <a href="https://www.instagram.com/ethan.sie/" className={styles["name-link"]}>
                    Ethan Sie
                </a>
                .
            </div>
            <br />
            <a href="https://stuy.enschool.org/" className={styles["school-logo-link"]}>
                <div className={styles.school}>
                    <Image className={styles["school-icon"]} src={StuyvesantHSLogoPng} alt="Stuyvesant" />
                    <div className={styles["school-text"]}>Stuyvesant High School</div>
                </div>
            </a>
        </div>
    );
}