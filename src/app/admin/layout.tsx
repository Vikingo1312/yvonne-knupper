"use client";

import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

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
            <header className="h-20 bg-surface-dark/50 border-b border-mystic-800/30 flex items-center justify-between px-6 sticky top-0 z-40 backdrop-blur-md">
                <div>
                    <h2 className="font-display text-2xl italic glow-text">Admin Panel</h2>
                    <p className="font-heading text-xs tracking-widest text-mystic-500 uppercase">
                        Yvonne Knupper
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 transition-all font-heading text-xs tracking-widest uppercase"
                    >
                        Ausloggen
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative w-12 h-12 flex flex-col justify-center items-center gap-[6px] text-accent-silver hover:text-white transition-colors z-50 rounded-full bg-mystic-900/50 border border-mystic-800/30 glow-hover"
                        aria-label="Admin Menü"
                    >
                        <span className={`block w-6 h-[2px] bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                        <span className={`block w-6 h-[2px] bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-[2px] bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-auto p-4 sm:p-10 relative">
                {children}

                {/* Fullscreen Overlay Admin Menu */}
                <div
                    className={`fixed inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl z-40 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] flex flex-col items-center justify-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <div
                        className="flex flex-col items-center gap-10 text-center w-full px-6"
                        style={{ transform: isOpen ? 'translateY(0)' : 'translateY(20px)', opacity: isOpen ? 1 : 0, transition: 'all 0.5s ease-out 0.2s' }}
                    >
                        <span className="font-heading text-xs tracking-[0.5em] uppercase text-mystic-500 font-light hidden sm:block">
                            Admin Navigation
                        </span>

                        <nav className="flex flex-col gap-6 sm:gap-8 w-full max-w-sm">
                            <Link
                                href="/admin"
                                onClick={() => setIsOpen(false)}
                                className={`font-display text-3xl sm:text-5xl tracking-wide italic transition-all duration-300 transform hover:scale-105 ${pathname === "/admin" ? "text-mystic-400" : "text-white hover:text-mystic-400"
                                    }`}
                            >
                                📊 Dashboard
                            </Link>
                            <Link
                                href="/admin/leads"
                                onClick={() => setIsOpen(false)}
                                className={`font-display text-3xl sm:text-5xl tracking-wide italic transition-all duration-300 transform hover:scale-105 ${pathname === "/admin/leads" ? "text-mystic-400" : "text-white hover:text-mystic-400"
                                    }`}
                            >
                                📬 Anfragen
                            </Link>
                            <Link
                                href="/admin/settings"
                                onClick={() => setIsOpen(false)}
                                className={`font-display text-3xl sm:text-5xl tracking-wide italic transition-all duration-300 transform hover:scale-105 ${pathname === "/admin/settings" ? "text-mystic-400" : "text-white hover:text-mystic-400"
                                    }`}
                            >
                                ⚙️ Einstellungen
                            </Link>
                        </nav>

                        <div className="mt-8 flex flex-col items-center gap-4">
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
                                className="font-heading text-sm tracking-widest uppercase text-mystic-400 hover:text-white transition-colors"
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
