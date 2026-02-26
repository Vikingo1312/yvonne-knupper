"use client";

import { useState, useEffect } from "react";

export default function ScrollIndicator() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY < 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollDown = () => {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    };

    if (!visible) return null;

    // Tiwaz rune (ᛏ) - arrow-like rune pointing down
    return (
        <button
            onClick={scrollDown}
            className="rune-scroll-indicator"
            aria-label="Nach unten scrollen"
            style={{ bottom: "30px" }}
        >
            <div className="rune-arrow">
                <svg
                    width="36"
                    height="48"
                    viewBox="0 0 36 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Tiwaz-inspired arrow rune pointing downward */}
                    <path
                        d="M18 4 L18 44 M18 44 L8 30 M18 44 L28 30"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Small decorative rune marks */}
                    <path
                        d="M12 12 L18 18 L24 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        opacity="0.5"
                    />
                    <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.6" />
                </svg>
            </div>
        </button>
    );
}
