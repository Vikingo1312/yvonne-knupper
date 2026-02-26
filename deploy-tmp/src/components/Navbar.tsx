"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Dienste", href: "/#dienste" },
    { label: "Über mich", href: "/#about" },
    { label: "Tages-Karte", href: "/#tageskarte" },
    { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/elf-logo-v3.png"
                                alt="Yvonne Knupper Logo"
                                width={48}
                                height={48}
                                className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-display text-xl tracking-wide glow-text italic">
                                Yvonne Knupper
                            </span>
                            <span className="block text-[10px] tracking-[0.3em] uppercase text-mystic-400 font-heading font-light">
                                Spirituelle Beratung
                            </span>
                        </div>
                    </Link>

                    {/* Menu Button & Theme Toggle on Right */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="relative w-10 h-10 flex items-center justify-center rounded-full glow-hover transition-all duration-500"
                            aria-label="Theme wechseln"
                        >
                            {isDark ? (
                                <svg className="w-5 h-5 text-mystic-300" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-mystic-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="5" />
                                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                </svg>
                            )}
                        </button>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative w-10 h-10 flex flex-col justify-center items-center gap-[6px] text-accent-silver hover:text-white transition-colors z-50 p-2"
                            aria-label="Menü öffnen"
                        >
                            <span className={`block w-6 h-[2px] bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                            <span className={`block w-6 h-[2px] bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-6 h-[2px] bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Fullscreen Overlay Menu */}
            <div
                className={`fixed inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl z-40 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] flex items-center justify-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center gap-8 text-center" style={{ transform: isOpen ? 'translateY(0)' : 'translateY(20px)', opacity: isOpen ? 1 : 0, transition: 'all 0.5s ease-out 0.2s' }}>

                    <span className="font-heading text-xs tracking-[0.5em] uppercase text-mystic-500 font-light mb-4">
                        Navigation
                    </span>
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block font-heading text-lg tracking-widest uppercase text-accent-silver hover:text-mystic-400 transition-colors py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
