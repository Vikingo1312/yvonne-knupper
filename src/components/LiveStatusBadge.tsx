"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function LiveStatusBadge() {
    const [isLive, setIsLive] = useState<boolean | null>(null);
    const { isDark } = useTheme();

    useEffect(() => {
        // Function to fetch the live status
        const fetchStatus = () => {
            fetch("/api/settings")
                .then(res => res.json())
                .then(data => {
                    if (data.settings) {
                        setIsLive(data.settings.is_live === "true");
                    }
                })
                .catch(err => console.error("Error fetching live status:", err));
        };

        // Fetch immediately
        fetchStatus();

        // Then poll every 30 seconds to keep it updated without refreshing
        const intervalId = setInterval(fetchStatus, 30000);
        return () => clearInterval(intervalId);
    }, []);

    // Don't render until we know the status to prevent hydration mismatch
    if (isLive === null) return null;

    const bgClass = isDark
        ? (isLive ? 'bg-surface-dark/80 hover:bg-surface-dark' : 'bg-surface-dark/50 opacity-70')
        : (isLive ? 'bg-white/90 hover:bg-white shadow-md' : 'bg-white/70 opacity-70 shadow-sm');

    const textClass = isDark ? 'text-white' : 'text-gray-800';
    const borderClass = isDark ? 'border-white/10' : 'border-gray-200';

    return (
        <div className="fixed bottom-6 left-6 z-50 pointer-events-auto">
            <div className={`flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-500 cursor-default ${bgClass} ${borderClass}`}>
                {/* Ping Animation Indicator */}
                <div className="relative flex h-3 w-3">
                    {isLive && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff14] opacity-75"></span>
                    )}
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${isLive ? 'bg-[#39ff14]' : 'bg-gray-500'}`}></span>
                </div>

                {/* Text Content */}
                <span className={`font-heading text-xs tracking-widest uppercase ${textClass}`}>
                    {isLive ? (
                        <span>Online <span className="opacity-50 ml-1 hidden sm:inline">– Jetzt anrufen</span></span>
                    ) : (
                        <span className={isDark ? "text-gray-400" : "text-gray-500"}>Offline</span>
                    )}
                </span>
            </div>
        </div>
    );
}

