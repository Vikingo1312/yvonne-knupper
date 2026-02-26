"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeContextType = {
    isDark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({ isDark: true, toggleTheme: () => { } });

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("yvonne-theme");
        if (saved === "light") {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
            document.body.classList.add("light-mode");
        }
    }, []);

    const toggleTheme = () => {
        setIsDark((prev) => {
            const next = !prev;
            if (next) {
                document.documentElement.classList.add("dark");
                document.body.classList.remove("light-mode");
                localStorage.setItem("yvonne-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                document.body.classList.add("light-mode");
                localStorage.setItem("yvonne-theme", "light");
            }
            return next;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
