"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const count = 35;
        for (let i = 0; i < count; i++) {
            const p = document.createElement("div");
            p.className = "particle";
            const size = Math.random() * 3 + 1;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${Math.random() * 100}%`;
            p.style.animationDuration = `${Math.random() * 15 + 10}s`;
            p.style.animationDelay = `${Math.random() * 10}s`;

            // Randomize colors between purple, pink, and ice blue
            const colors = [
                "rgba(192, 132, 252, 0.8)",
                "rgba(251, 113, 133, 0.6)",
                "rgba(165, 180, 252, 0.7)",
                "rgba(192, 132, 252, 0.5)",
            ];
            const color = colors[Math.floor(Math.random() * colors.length)];
            p.style.background = color;
            p.style.boxShadow = `0 0 ${size * 3}px ${color}`;

            container.appendChild(p);
        }

        return () => {
            if (container) container.innerHTML = "";
        };
    }, []);

    return <div ref={containerRef} className="particles-container" />;
}
