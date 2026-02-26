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

    const navItems = [
        { label: "Dashboard", href: "/admin", icon: "📊" },
        { label: "Anfragen", href: "/admin/leads", icon: "📬" },
        { label: "Einstellungen", href: "/admin/settings", icon: "⚙️" },
    ];

    // Don't show admin chrome on login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col">
            {/* Admin Header */}
            <header className="h-16 bg-surface-dark border-b border-mystic-800/30 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-[60] backdrop-blur-md">
                <Link href="/admin" className="flex items-center gap-2">
                    <h2 className="font-display text-xl sm:text-2xl italic glow-text">Admin Panel</h2>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-4 py-2 rounded-lg font-heading text-xs tracking-wider uppercase transition-all ${pathname === item.href
                                    ? "bg-mystic-600/20 text-mystic-300 border border-mystic-600/30"
                                    : "text-mystic-500 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {item.icon} {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleLogout}
                        className="px-3 sm:px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 transition-all font-heading text-[10px] sm:text-xs tracking-widest uppercase"
                    >
                        Ausloggen
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-[5px] text-accent-silver hover:text-white transition-colors rounded-full bg-mystic-900/50 border border-mystic-800/30"
                        aria-label="Admin Menü"
                    >
                        <span className={`block w-5 h-[2px] bg-current transition duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                        <span className={`block w-5 h-[2px] bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-[2px] bg-current transition duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-surface-dark border-b border-mystic-800/30 px-4 py-3 space-y-1 z-[59]">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 rounded-lg font-heading text-sm tracking-wider uppercase transition-all ${pathname === item.href
                                    ? "bg-mystic-600/20 text-mystic-300"
                                    : "text-mystic-500 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {item.icon} {item.label}
                        </Link>
                    ))}
                    <div className="pt-2 border-t border-mystic-800/30 mt-2">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-mystic-500 hover:text-white font-heading text-sm tracking-wider uppercase"
                        >
                            🌐 Zur Website
                        </Link>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 overflow-auto p-4 sm:p-8">
                {children}
            </main>
        </div>
    );
}
