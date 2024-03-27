'use client'
import React, { SetStateAction, useState } from "react";
import styles from "@/styles/Carousel.module.css";


export default function Carousel() {
  const [slide, setSlide] = useState(0);
  const [translate, setTranslate] = useState("0%");
  const [initialX, setInitialX] = useState<number | undefined>();
  const [finalX, setFinalX] = useState<number | undefined>();
  const [drag, setDrag] = useState(false);
  const [zoom, setZoom] = useState(false);

  const onMouseDown = (e: { screenX: React.SetStateAction<number | undefined>; }) => {
    setInitialX(e.screenX);
    setDrag(true);
  };

  const onMouseUp = (e: { screenX: React.SetStateAction<number | undefined>; }) => {
    setDrag(false);
    setFinalX(e.screenX);
    if (initialX === finalX) {
      setZoom(true);
      if (slide === 0) {
        setTranslate("-100%");
        setSlide(1);
      } else {
        setTranslate("0%");
        setSlide(0);
      }
      setTimeout(() => {
        setZoom(false);
      }, 80);
      return;
    }
    if (slide === 0 && parseInt(translate.substring(0, translate.length - 2)) < 0) {
      setTranslate("-100%");
      setSlide(1);
    } else if (
      slide === 0 &&
      parseInt(translate.substring(0, translate.length - 2)) > 0
    ) {
      setTranslate("0%");
    }
    if (slide === 1 && parseInt(translate.substring(0, translate.length - 2)) > 0) {
      setTranslate("0%");
      setSlide(0);
    } else if (
      slide === 1 &&
      parseInt(translate.substring(0, translate.length - 2)) < 0
    ) {
      setTranslate("-100%");
    }
    setZoom(false);
  };

  const onMouseMove = (e: { screenX: React.SetStateAction<number | undefined>; }) => {
    const bodyWidth = document.getElementById("root")?.clientWidth;
    if (drag && finalX != null && bodyWidth != null && initialX != null) {
      setFinalX(e.screenX);
      if (Math.abs(finalX - initialX) > 0.6 * bodyWidth) {
        return;
      }
      if (
        ((slide === 0 && finalX - initialX < 0) ||
          (slide === 1 && finalX - initialX > 0)) &&
        finalX != null
      ) {
        setZoom(true);
        setTranslate(finalX - initialX + "px");
      }
    }
  };

  return (
    <div
      className={styles["carousel"]}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <div
        className={styles["current-item"]}
        style={{
          transform:
            "translateX(" + translate + ")" + (zoom ? " scale(0.7)" : ""),
        }}
      >
        <div className={`${styles["image-one"]} ${styles["carousel-image"]}`}>
          <div className={styles["image-text"]}>
            Homecoming
            <br />
            Fundraiser
          </div>
        </div>
        <div className={`${styles["image-two"]} ${styles["carousel-image"]}`} />
      </div>
    </div>
  );
}