"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Meine Gaben", href: "/#meine-gaben" },
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
                            className="relative w-10 h-10 flex flex-col justify-center items-center gap-[6px] text-accent-silver hover:text-white transition-colors z-[60] p-2"
                            aria-label="Menü öffnen"
                        >
                            <span className={`block w-6 h-[2px] bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                            <span className={`block w-6 h-[2px] bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-6 h-[2px] bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Fullscreen Overlay Menu – repositioned for better mobile UX */}
            <div
                className={`fixed inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl z-[55] transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] flex flex-col justify-center items-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Spacer to push content below the navbar area */}
                <div className="flex flex-col items-center gap-6 text-center pt-24 sm:pt-0" style={{ transform: isOpen ? 'translateY(0)' : 'translateY(20px)', opacity: isOpen ? 1 : 0, transition: 'all 0.5s ease-out 0.2s' }}>

                    <span className="font-heading text-[10px] tracking-[0.5em] uppercase text-mystic-500/60 font-light mb-2">
                        ✦ Navigation ✦
                    </span>

                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-mystic-500/30 to-transparent mb-2" />

                    <nav className="flex flex-col items-center gap-1">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block font-heading text-base sm:text-lg tracking-[0.25em] uppercase text-accent-silver hover:text-mystic-400 transition-all duration-300 py-3 px-8 rounded-xl hover:bg-mystic-500/5"
                                style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-mystic-500/30 to-transparent mt-4" />

                    {/* Quick contact in menu */}
                    <div className="flex gap-4 mt-2">
                        <a
                            href="tel:+4941018205841"
                            className="w-12 h-12 rounded-full glass flex items-center justify-center text-mystic-400 hover:text-rose-400 glow-hover transition-all"
                            aria-label="Anrufen"
                        >
                            <span className="text-lg">📞</span>
                        </a>
                        <a
                            href="https://wa.me/491788276800"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full glass flex items-center justify-center text-mystic-400 hover:text-green-400 glow-hover transition-all"
                            aria-label="WhatsApp"
                        >
                            <span className="text-lg">💬</span>
                        </a>
                        <a
                            href="mailto:yvonne-knupper@gmx.de"
                            className="w-12 h-12 rounded-full glass flex items-center justify-center text-mystic-400 hover:text-accent-ice glow-hover transition-all"
                            aria-label="E-Mail"
                        >
                            <span className="text-lg">✉️</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
