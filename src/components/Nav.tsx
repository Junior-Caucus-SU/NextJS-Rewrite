import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/Nav.module.css"

import LowerBannerTexture from "/public/static/images/LowerBannerTexture.png";
import JuniorCaucusLogoSvg from "/public/static/images/JuniorCaucusLogo.svg";

interface NavProps {
    page: string
}

export default async function Nav(props: NavProps) {
    return (
        <div className={styles.navbar}>
            <div>
                <div className={styles.banner}>
                    <p className={styles["banner-text"]}>
                        We’re raising money for Junior Prom 2024! Read our initiative{" "}
                        <Link href="/JProm" className={styles["banner-links"]}>
                            here
                        </Link>

                    </p>
                </div>
                <div className={styles["banner-texture"]}>
                    <Image src={LowerBannerTexture} alt="Texture" priority={false} placeholder={"blur"} />
                </div>
            </div>
            <div className={styles["nav-container"]}>
                <div className={styles["juni-log-container"]}>
                    <Link href="/" className={`${styles["junior-logo"]} ${styles["nav-menu-item"]}`} >
                        <Image src={JuniorCaucusLogoSvg} alt="Junior Caucus Logo" priority={true} />
                    </Link>
                </div>
                <div className={`${styles.menu} }`}>
                    <Link href="/" className={currPageGet(props.page, "Home")}>
                        {getText(props.page, "Home")}
                    </Link>
                    <Link href="/people" className={currPageGet(props.page, "People")} >
                        {getText(props.page, "People")}
                    </Link>
                    <Link href="/events" className={currPageGet(props.page, "Events")}>
                        {getText(props.page, "Events")}
                    </Link>
                    <Link href="/resources" className={currPageGet(props.page, "Resources")}>
                        {getText(props.page, "Resources")}
                    </Link>
                    <Link href="/socials" className={currPageGet(props.page, "Socials")} >
                        {getText(props.page, "Socials")}
                    </Link>
                </div>

                <div className={`${styles["nav-menu-item"]} ${styles["mobile-dropdown"]}`}>
                    <div>
                        <span className={styles.decorative}>b</span> Menu{" "}
                        <span className={styles.decorative}>a</span>
                    </div>
                    <div className={styles["dropdown-content"]}>
                        <Link href="/" className={currPageGet(props.page, "Home")}>
                            {getText(props.page, "Home")}
                        </Link>
                        <Link href="/people" className={currPageGet(props.page, "People")}>
                            {getText(props.page, "People")}
                        </Link>
                        <Link href="/events" className={currPageGet(props.page, "Events")}>
                            {getText(props.page, "Events")}
                        </Link>
                        <Link href="/resources" className={currPageGet(props.page, "Resources")}>
                            {getText(props.page, "Resources")}
                        </Link>
                        <Link href="/socials" >
                            <div className={currPageGet(props.page, "Socials")}>{getText(props.page, "Socials")}</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function currPageGet(page: string, currPage: string) {
    return currPage === page ? `${styles["nav-menu-item"]} ${styles["current-page"]}` : styles["nav-menu-item"];
};

function getText(page: string, currPage: string) {
    return currPage === page ? (
        <>
            <span className={styles.decorative}>b</span> {currPage}{" "}
            <span className={styles.decorative}>a</span>
        </>
    ) : (
        <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{currPage}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </>
    );
};