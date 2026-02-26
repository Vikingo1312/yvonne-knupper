"use client";

import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

export default function AdminLayout({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const { isDark, toggleTheme } = useTheme();

    // Hide main site elements (Navbar, Footer, Chatbot, WhatsApp, etc.)
    useEffect(() => {
        document.body.classList.add("admin-mode");
        return () => {
            document.body.classList.remove("admin-mode");
        };
    }, []);

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    };

    // Don't show admin chrome on login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col">
            {/* Admin Header */}
            <header className="h-16 sm:h-20 bg-[var(--bg-surface)]/80 border-b border-mystic-800/30 flex items-center justify-between px-3 sm:px-6 sticky top-0 z-40 backdrop-blur-md">
                <div className="min-w-0">
                    <h2 className="font-display text-lg sm:text-2xl italic glow-text truncate">Admin Panel</h2>
                    <p className="font-heading text-[10px] sm:text-xs tracking-widest text-mystic-500 uppercase hidden sm:block">
                        Yvonne Knupper
                    </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[var(--bg-card)] border border-mystic-800/30 hover:border-mystic-500/50 transition-all text-lg"
                        aria-label="Theme wechseln"
                    >
                        {isDark ? "🌙" : "☀️"}
                    </button>

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 transition-all font-heading text-[10px] sm:text-xs tracking-widest uppercase"
                    >
                        Ausloggen
                    </button>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative w-9 h-9 sm:w-12 sm:h-12 flex flex-col justify-center items-center gap-[5px] sm:gap-[6px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors z-50 rounded-full bg-[var(--bg-card)] border border-mystic-800/30 glow-hover"
                        aria-label="Admin Menü"
                    >
                        <span className={`block w-5 sm:w-6 h-[2px] bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-[7px] sm:translate-y-[8px]' : ''}`} />
                        <span className={`block w-5 sm:w-6 h-[2px] bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 sm:w-6 h-[2px] bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[7px] sm:-translate-y-[8px]' : ''}`} />
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-auto p-3 sm:p-10 relative">
                {children}

                {/* Fullscreen Overlay Admin Menu */}
                <div
                    className={`fixed inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl z-40 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] flex flex-col items-center justify-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <div
                        className="flex flex-col items-center gap-8 sm:gap-10 text-center w-full px-6"
                        style={{ transform: isOpen ? 'translateY(0)' : 'translateY(20px)', opacity: isOpen ? 1 : 0, transition: 'all 0.5s ease-out 0.2s' }}
                    >
                        <span className="font-heading text-xs tracking-[0.5em] uppercase text-mystic-500 font-light">
                            Admin Navigation
                        </span>

                        <nav className="flex flex-col gap-5 sm:gap-8 w-full max-w-sm">
                            <Link
                                href="/admin"
                                onClick={() => setIsOpen(false)}
                                className={`font-display text-2xl sm:text-5xl tracking-wide italic transition-all duration-300 transform hover:scale-105 ${pathname === "/admin" ? "text-mystic-400" : "text-[var(--text-primary)] hover:text-mystic-400"
                                    }`}
                            >
                                📊 Dashboard
                            </Link>
                            <Link
                                href="/admin/leads"
                                onClick={() => setIsOpen(false)}
                                className={`font-display text-2xl sm:text-5xl tracking-wide italic transition-all duration-300 transform hover:scale-105 ${pathname === "/admin/leads" ? "text-mystic-400" : "text-[var(--text-primary)] hover:text-mystic-400"
                                    }`}
                            >
                                📬 Anfragen
                            </Link>
                            <Link
                                href="/admin/settings"
                                onClick={() => setIsOpen(false)}
                                className={`font-display text-2xl sm:text-5xl tracking-wide italic transition-all duration-300 transform hover:scale-105 ${pathname === "/admin/settings" ? "text-mystic-400" : "text-[var(--text-primary)] hover:text-mystic-400"
                                    }`}
                            >
                                ⚙️ Einstellungen
                            </Link>
                        </nav>

                        <div className="mt-6 flex flex-col items-center gap-4">
                            <div className="w-12 h-px bg-mystic-500/30" />
                            <button
                                onClick={() => { setIsOpen(false); handleLogout(); }}
                                className="font-heading text-sm tracking-widest uppercase text-rose-400 hover:text-rose-300 transition-colors mb-2"
                            >
                                Ausloggen
                            </button>
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="font-heading text-sm tracking-widest uppercase text-mystic-400 hover:text-[var(--text-primary)] transition-colors"
                            >
                                ← Zurück zur Website
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
