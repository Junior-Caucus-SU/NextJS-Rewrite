'use client'
import { useState, useEffect, useRef } from 'react';
import styles from "@/styles/Cursor.module.css";

interface MousePosition {
    x: number;
    y: number;
}

interface RefObject {
    current: MousePosition;
}

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isInteractableHovered, setIsInteractableHovered] = useState(false);
    const pInner = useRef<MousePosition>({ x: 0, y: 0 });
    const pOuter = useRef<MousePosition>({ x: 0, y: 0 });
    const cInner = useRef<HTMLDivElement | null>(null);
    const cOuter = useRef<HTMLDivElement | null>(null);
    const requestRef = useRef<number>();


    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.pageX, y: e.pageY });
        };

        const addInteractableListeners = () => {
            const interactables = document.querySelectorAll('a, .interactable');
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => setIsInteractableHovered(true));
                el.addEventListener('mouseleave', () => setIsInteractableHovered(false));
            });
        };
        addInteractableListeners();

        const animate = () => {
            pInner.current = {
                x: pInner.current.x + (mousePosition.x - pInner.current.x) / 5,
                y: pInner.current.y + (mousePosition.y - pInner.current.y) / 5
            };
            pOuter.current = {
                x: pOuter.current.x + (mousePosition.x - pOuter.current.x) / 10,
                y: pOuter.current.y + (mousePosition.y - pOuter.current.y) / 10
            };
            if (cInner.current) {
                cInner.current.style.left = `${pInner.current.x}px`;
                cInner.current.style.top = `${pInner.current.y}px`;
            }
            if (cOuter.current) {
                cOuter.current.style.left = `${pOuter.current.x}px`;
                cOuter.current.style.top = `${pOuter.current.y}px`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', updateMousePosition);
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
            if (requestRef.current !== undefined) {
                cancelAnimationFrame(requestRef.current);
            }
            const interactables = document.querySelectorAll('a, .interactable');
            interactables.forEach(el => {
                el.removeEventListener('mouseenter', () => setIsInteractableHovered(true));
                el.removeEventListener('mouseleave', () => setIsInteractableHovered(false));
            });
        };
    }, [mousePosition]);

    useEffect(() => {
        if (isInteractableHovered) {
            if (cInner.current) {
                cInner.current.style.width = '30px';
                cInner.current.style.height = '30px';
            }
            if (cOuter.current) { cOuter.current.style.opacity = '0'; }
        } else {
            if (cInner.current) {
                cInner.current.style.width = '5px';
                cInner.current.style.height = '5px';
            }
            if (cOuter.current) { cOuter.current.style.opacity = '1'; }
        }
    }, [isInteractableHovered]);

    return (
        <div className={styles.cursor}>
            <div ref={cInner} className={styles["cursor-inner"]} />
            <div ref={cOuter} className={styles["cursor-outer"]} />
        </div>
    );
}