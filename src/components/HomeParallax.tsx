'use client'
import "@/styles/HomeParallax.css";
import Homecoming from "/public/static/images/homecoming.webp";
import GloriousLeaders from "/public/static/images/gloriousLeaders.webp";
import ParallaxBackground from "/public/static/images/parallaxBackgound.webp";
import Battle from "/public/static/images/battle.webp";
import PhotoCapture from "/public/static/images/photoCapture.webp";
import Image from "next/image";

import {
    ParallaxProvider,
    ParallaxBanner,
    ParallaxBannerLayer,
    Parallax,
    EffectNumber,
    EffectString,
    BannerLayer,
} from "react-scroll-parallax";


const images = [
    {
        url: GloriousLeaders,
        scrollspeed: 5,
        alt: "polaroid josephine, grace, ryan",
    },
    { url: Battle, scrollspeed: 10, alt: "battle" },
    { url: PhotoCapture, scrollspeed: 40, alt: "photocapture" },
];



const offsets = [10, 64, 10];

export default function HomeParallax() {
    return (
        <div>
            <ParallaxProvider>
                <ParallaxBanner
                    className="parallaxView"
                    layers={[
                        {
                            image: ParallaxBackground.src,
                            // amount: 0.5,
                            // slowerScrollRate: true,
                        },
                    ]}
                    style={{
                        height: "80vw",
                    }}
                >
                    <ParallaxBannerLayer speed={-20}>
                        <Image
                            src={Homecoming}
                            alt="homecoming"
                            style={{
                                width: "60vw",
                                height: "auto",
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                        />
                    </ParallaxBannerLayer>
                    {images.map((image, index) => {
                        let translateY;
                        if (image.url === PhotoCapture) {
                            translateY = [-75, -300];
                        } else {
                            translateY = [50, -50];
                        }
                        return (
                            <Parallax
                                key={index}
                                easing={[1, -0.2, 0.5, 5]}
                                translateY={translateY as EffectNumber | EffectString}
                                translateX={[offsets[index], offsets[index]]}
                            >
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    style={{
                                        position: "inherit",
                                        width: "40%",
                                        height: "auto",
                                    }}
                                />
                            </Parallax>
                        );
                    })}
                </ParallaxBanner>
            </ParallaxProvider>
        </div>
    );
};

