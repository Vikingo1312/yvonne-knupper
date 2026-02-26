"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

/* ═══════════════════════════════════════
   MYSTICAL RUNE PARTICLES
   Floating runes, symbols & shimmer that
   drift across the page like stars
   ═══════════════════════════════════════ */
const RUNE_CHARS = ["ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛊ", "ᛏ", "ᛒ", "ᛗ", "ᛚ", "ᛞ", "ᛟ", "✦", "✧", "⊹", "✵", "❋", "˚", "⋆"];

export default function RuneParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { isDark } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let particles: Particle[] = [];

        interface Particle {
            x: number;
            y: number;
            char: string;
            size: number;
            opacity: number;
            targetOpacity: number;
            speed: number;
            drift: number;
            phase: number;
            color: string;
        }

        const darkColors = [
            "rgba(192, 132, 252, ",   // purple
            "rgba(168, 85, 247, ",    // deeper purple
            "rgba(251, 113, 133, ",   // rose
            "rgba(147, 197, 253, ",   // ice blue
            "rgba(196, 181, 253, ",   // lavender
        ];

        const lightColors = [
            "rgba(124, 58, 237, ",    // vivid purple
            "rgba(139, 92, 246, ",    // medium purple
            "rgba(219, 39, 119, ",    // rose
            "rgba(79, 70, 229, ",     // indigo
            "rgba(168, 85, 247, ",    // deeper purple
        ];

        const colors = isDark ? darkColors : lightColors;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
        };

        const createParticle = (): Particle => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            char: RUNE_CHARS[Math.floor(Math.random() * RUNE_CHARS.length)],
            size: 8 + Math.random() * 14,
            opacity: 0,
            targetOpacity: isDark ? (0.08 + Math.random() * 0.18) : (0.15 + Math.random() * 0.25),
            speed: 0.05 + Math.random() * 0.15,
            drift: (Math.random() - 0.5) * 0.3,
            phase: Math.random() * Math.PI * 2,
            color: colors[Math.floor(Math.random() * colors.length)],
        });

        const init = () => {
            resize();
            const count = Math.floor((canvas.width * canvas.height) / 60000);
            particles = Array.from({ length: Math.min(count, 40) }, createParticle);
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                // Gently float upward
                p.y -= p.speed;
                p.x += Math.sin(p.phase) * p.drift;
                p.phase += 0.005;

                // Pulse opacity
                const pulse = Math.sin(p.phase * 2) * 0.5 + 0.5;
                p.opacity += (p.targetOpacity * pulse - p.opacity) * 0.02;

                // Reset when off screen
                if (p.y < -20) {
                    p.y = canvas.height + 20;
                    p.x = Math.random() * canvas.width;
                    p.char = RUNE_CHARS[Math.floor(Math.random() * RUNE_CHARS.length)];
                }

                // Draw
                ctx.font = `${p.size}px serif`;
                ctx.textAlign = "center";
                ctx.fillStyle = `${p.color}${p.opacity})`;
                ctx.fillText(p.char, p.x, p.y);
            });

            animationId = requestAnimationFrame(animate);
        };

        init();
        animate();

        window.addEventListener("resize", init);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", init);
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{ mixBlendMode: isDark ? "screen" : "multiply" }}
        />
    );
}

