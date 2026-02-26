"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import DailyCard from "@/components/DailyCard";
import MoonPhaseWidget from "@/components/MoonPhaseWidget";

const services = [
    {
        title: "Kartenlegen",
        subtitle: "Madame Lenormand",
        description: "Individuelle Beratungen per Telefon. Die Karten öffnen einen Raum, in dem die leisen Stimmen der Ahnen und die Zeichen des Universums sichtbar werden.",
        icon: "🔮",
        href: "/kartenlegen",
        image: "/images/karten-new.png",
    },
    {
        title: "Dualseelen Coaching",
        subtitle: "Seelentiefe Verbindung",
        description: "Begegnungen, die sich von der ersten Sekunde magisch anfühlen. Ich begleite dich auf dem Weg zu deiner Dualseele.",
        icon: "💫",
        href: "/dualseelen",
        image: "/images/dualseelen-new.png",
    },
    {
        title: "Kerzenrituale",
        subtitle: "Die Kraft des Feuers",
        description: "Eine uralte Form der Magie. Deine Energie, deine Worte, deine Ausrichtung – alles verbindet sich beim Entzünden der Kerze.",
        icon: "🕯️",
        href: "/kerzenrituale",
        image: "/images/kerzenrituale.jpg",
    },
    {
        title: "Matrix Quantenheilung",
        subtitle: "Frequenzen der Heilung",
        description: "Eine Heilmethode auf den Frequenzen der Quantenphysik. Erlange Zugang zu dem Feld, in dem alles gespeichert ist.",
        icon: "🧬",
        href: "/quantenheilung",
        image: "/images/matrix.jpg",
    },
    {
        title: "Schamanische Reisen",
        subtitle: "Uraltes Wissen",
        description: "Spirituelle Fernheilung durch schamanische Praktiken. Tiefe Verbundenheit mit Mutter Erde und den alten Geistern.",
        icon: "🦅",
        href: "/schamanische-reisen",
        image: "/images/schamanische-reisen.jpg",
    },
];

const testimonials = [
    {
        name: "Ayşe K.",
        text: "Yvonne hat eine unglaubliche Gabe. Ihre Kartenlegung hat mir Klarheit in einer sehr schwierigen Lebensphase gegeben. Ich bin unendlich dankbar.",
        rating: 5,
    },
    {
        name: "Marco B.",
        text: "Die schamanische Reise mit Yvonne war eine der tiefgreifendsten Erfahrungen meines Lebens. Danach hat sich so viel zum Positiven verändert.",
        rating: 5,
    },
    {
        name: "Elena S.",
        text: "Einfühlsam, kraftvoll und treffsicher. Yvonne verbindet spirituelle Tiefe mit bodenständiger Herzlichkeit. Eine wundervolle Seele.",
        rating: 5,
    },
];

export default function HomePage() {
    const sectionsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const addRef = (el: HTMLDivElement | null) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <>
            {/* ═══════════════════════════════════════
          HERO SECTION – Centered, truly transparent logo
          ═══════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
                {/* Background gradient orbs */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mystic-600/10 rounded-full blur-[120px] animate-float-slow" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/8 rounded-full blur-[100px] animate-float" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-ice/5 rounded-full blur-[80px]" />
                </div>

                {/* Moon Phase – absolute, outside flow */}
                <div className="absolute top-28 right-6 sm:right-12 md:right-20 z-30">
                    <MoonPhaseWidget />
                </div>

                {/* Centered content */}
                <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto">
                    {/* Elf Logo – truly transparent PNG, pure freestanding */}
                    <div className="relative mb-10 animate-float">
                        {/* Subtle purple shimmer behind the elf */}
                        <div className="absolute inset-[-20px] bg-purple-500/8 blur-[50px] rounded-full" />
                        <Image
                            src="/images/elf-logo-v3.png"
                            alt="Yvonne Knupper"
                            width={224}
                            height={224}
                            className="relative w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                            priority
                        />
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-wide glow-text mb-5 italic">
                        Yvonne Knupper
                    </h1>
                    <p className="font-heading text-xs sm:text-sm tracking-[0.4em] uppercase text-mystic-400 mb-10 font-light">
                        Kartenlegen · Schamanische Reisen · Energiearbeit
                    </p>

                    {/* Subtitle */}
                    <p className="font-body text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-14">
                        Seit Generationen liegt die Gabe der spirituellen Wahrnehmung in meiner Familie.
                        Ich öffne dir den Raum, in dem die leisen Stimmen der Ahnen sichtbar werden.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/kontakt"
                            className="px-10 py-4 bg-gradient-to-r from-mystic-600 to-rose-500 rounded-2xl font-heading text-sm tracking-widest uppercase text-white glow-hover transition-all duration-400 hover:shadow-lg hover:shadow-mystic-500/25"
                        >
                            Termin vereinbaren
                        </Link>
                        <Link
                            href="/#dienste"
                            className="px-10 py-4 glass rounded-2xl font-heading text-sm tracking-widest uppercase text-mystic-300 glow-hover transition-all duration-400"
                        >
                            Meine Dienste
                        </Link>
                    </div>
                </div>

                {/* Bottom fog */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-20 pointer-events-none" />
            </section>

            {/* ═══════════════════════════════════════
          SERVICES SECTION – More spacing
          ═══════════════════════════════════════ */}
            <section id="dienste" className="py-32 px-4 relative z-10">
                <div ref={addRef} className="reveal-section max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="font-heading text-xs tracking-[0.5em] uppercase text-mystic-500 font-light">
                            ✦ Was ich für dich tun kann ✦
                        </span>
                        <h2 className="font-display text-4xl sm:text-5xl tracking-wide mt-6 glow-text italic">
                            Meine Dienste
                        </h2>
                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent mx-auto mt-8" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-10">
                        {services.map((service, i) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="service-card group overflow-hidden w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)]"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                {/* Card Image – lighter tint so images are visible */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={400}
                                        height={192}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.85]"
                                    />
                                    {/* Subtle gradient fade to card bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-80" />
                                    <div className="absolute top-4 left-4 text-3xl drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">
                                        {service.icon}
                                    </div>
                                </div>
                                {/* Card Content */}
                                <div className="p-7">
                                    <h3 className="font-display text-xl tracking-wide italic mb-1">
                                        {service.title}
                                    </h3>
                                    <p className="font-heading text-xs tracking-widest text-mystic-500 uppercase mb-4 font-light">
                                        {service.subtitle}
                                    </p>
                                    <p className="font-body text-[var(--text-secondary)] leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="mt-6 flex items-center gap-2 text-mystic-400 font-heading text-xs tracking-widest uppercase group-hover:text-rose-400 transition-colors font-light">
                                        <span>Mehr erfahren</span>
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          DAILY CARD SECTION – More spacing
          ═══════════════════════════════════════ */}
            <section id="tageskarte" className="py-32 px-4 relative z-10">
                <div ref={addRef} className="reveal-section max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="font-heading text-xs tracking-[0.5em] uppercase text-rose-400 font-light">
                            ✦ Deine tägliche Botschaft ✦
                        </span>
                        <h2 className="font-display text-4xl sm:text-5xl tracking-wide mt-6 glow-text italic">
                            Tages-Karte
                        </h2>
                        <p className="font-body text-lg text-[var(--text-secondary)] mt-6 max-w-lg mx-auto leading-relaxed">
                            Ziehe jeden Tag eine Lenormand-Karte und erhalte eine persönliche Botschaft
                            des Universums für deinen Tag.
                        </p>
                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mt-8" />
                    </div>

                    <DailyCard />
                </div>
            </section>

            {/* ═══════════════════════════════════════
          ABOUT TEASER – Constellation Portrait
          ═══════════════════════════════════════ */}
            <section id="about" className="py-32 px-4 relative z-10">
                <div ref={addRef} className="reveal-section max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="font-heading text-xs tracking-[0.5em] uppercase text-mystic-500 font-light">
                            ✦ Über mich ✦
                        </span>
                        <h2 className="font-display text-4xl sm:text-5xl tracking-wide mt-6 glow-text italic">
                            Mein Weg
                        </h2>
                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent mx-auto mt-8" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Constellation Portrait */}
                        <div className="relative mx-auto lg:mx-0">
                            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden glow-border">
                                <Image
                                    src="/images/yvonne-hybrid.png"
                                    alt="Yvonne Knupper – Sternbild"
                                    width={384}
                                    height={384}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating glow orbs around portrait */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-mystic-500/20 rounded-full blur-[40px] animate-float" />
                            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-rose-500/15 rounded-full blur-[30px] animate-float-slow" />
                        </div>

                        {/* About Text */}
                        <div className="space-y-6">
                            <div className="space-y-6 font-body text-xl text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    Ich bin <span className="text-mystic-400 italic">Yvonne Knupper</span> und entstamme einer alten Familie der Reisenden,
                                    deren Wurzeln tief in der Tradition spiritueller Wahrnehmungen und intuitiver Weisheit verankert sind.
                                    Meine Ahnen ließen sich um 1950 in Hamburg nieder.
                                </p>
                                <p>
                                    Das Erbe – die Offenheit für die Welt, das Hören zwischen den Zeilen und das
                                    <span className="text-rose-400 italic"> Sehen hinter den Schleiern </span> – lebt in mir weiter.
                                    Schon als Kind spürte ich die feinen Schwingungen meiner Umgebung.
                                </p>
                                <p>
                                    In meiner energetischen Arbeit fließen <span className="text-accent-ice italic">Weissagungskunst</span> und
                                    mein intuitives Sehen, Fühlen und Hören zusammen, um verborgene Wahrheiten sichtbar zu machen.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link
                                    href="/ueber-mich"
                                    className="inline-flex items-center gap-2 px-8 py-4 glass rounded-2xl font-heading text-sm tracking-widest uppercase text-mystic-300 glow-hover transition-all font-light"
                                >
                                    Mehr über mich
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          TESTIMONIALS – More spacing
          ═══════════════════════════════════════ */}
            <section className="py-32 px-4 relative z-10">
                <div ref={addRef} className="reveal-section max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="font-heading text-xs tracking-[0.5em] uppercase text-accent-ice font-light">
                            ✦ Stimmen meiner Klienten ✦
                        </span>
                        <h2 className="font-display text-4xl sm:text-5xl tracking-wide mt-6 glow-text italic">
                            Erfahrungen
                        </h2>
                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent-ice to-transparent mx-auto mt-8" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="glass rounded-2xl p-10 glow-hover transition-all duration-300"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, j) => (
                                        <span key={j} className="text-mystic-400">✦</span>
                                    ))}
                                </div>
                                <p className="font-body text-lg text-[var(--text-secondary)] leading-relaxed italic mb-8">
                                    „{t.text}"
                                </p>
                                <p className="font-heading text-xs tracking-widest uppercase text-mystic-400 font-light">
                                    — {t.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          CTA SECTION – More spacing
          ═══════════════════════════════════════ */}
            <section className="py-32 px-4 relative z-10">
                <div ref={addRef} className="reveal-section max-w-3xl mx-auto text-center">
                    <div className="glass rounded-3xl p-16 sm:p-20 glow-border relative overflow-hidden">
                        {/* Background orb */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-mystic-500/10 rounded-full blur-[80px]" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-500/8 rounded-full blur-[60px]" />

                        <div className="relative z-10">
                            <span className="text-5xl block mb-8">🔮</span>
                            <h2 className="font-display text-3xl sm:text-4xl tracking-wide glow-text italic mb-6">
                                Bereit für deine Reise?
                            </h2>
                            <p className="font-body text-xl text-[var(--text-secondary)] mb-10 max-w-lg mx-auto leading-relaxed">
                                Jede Beratung ist individuell auf deine Fragen und Themen abgestimmt.
                                Kontaktiere mich und wir finden gemeinsam den richtigen Weg.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <a
                                    href="tel:+4941018205841"
                                    className="px-10 py-5 bg-gradient-to-r from-mystic-600 to-rose-500 rounded-2xl font-heading text-sm tracking-widest uppercase text-white glow-hover transition-all"
                                >
                                    📞 Jetzt anrufen
                                </a>
                                <a
                                    href="https://wa.me/491788276800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-5 glass rounded-2xl font-heading text-sm tracking-widest uppercase text-mystic-300 glow-hover transition-all border border-mystic-500/20"
                                >
                                    💬 WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
