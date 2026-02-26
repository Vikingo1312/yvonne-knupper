"use client";

import Link from "next/link";
import Image from "next/image";

interface ServicePageLayoutProps {
    title: string;
    subtitle: string;
    icon: string;
    image: string;
    description: string;
    sections: {
        heading: string;
        content: string;
    }[];
    benefits: string[];
    process: string[];
    cta: string;
    price?: string;
    priceNote?: string;
}

export default function ServicePageLayout({
    title,
    subtitle,
    icon,
    image,
    description,
    sections,
    benefits,
    process,
    cta,
    price,
    priceNote,
}: ServicePageLayoutProps) {
    return (
        <main className="pt-24 pb-20">
            {/* Hero Banner */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover brightness-[0.4]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/30 to-[var(--bg-primary)]" />
                <div className="relative z-10 text-center px-4">
                    <span className="text-5xl block mb-6">{icon}</span>
                    <h1 className="font-display text-4xl sm:text-6xl tracking-wide glow-text italic mb-4">
                        {title}
                    </h1>
                    <p className="font-heading text-sm tracking-[0.4em] uppercase text-mystic-400 font-light">
                        {subtitle}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Introduction */}
                    <p className="font-body text-xl text-[var(--text-secondary)] leading-relaxed text-center mb-16">
                        {description}
                    </p>
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent mx-auto mb-16" />

                    {/* Content Sections */}
                    {sections.map((section, i) => (
                        <div key={i} className="mb-14">
                            <h2 className="font-display text-2xl sm:text-3xl tracking-wide italic glow-text mb-6">
                                {section.heading}
                            </h2>
                            <p className="font-body text-lg text-[var(--text-secondary)] leading-relaxed">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-display text-3xl tracking-wide italic glow-text text-center mb-12">
                        Was Dich erwartet
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="glass rounded-xl p-6 flex items-start gap-4"
                            >
                                <span className="text-mystic-400 text-lg mt-1">✦</span>
                                <p className="font-body text-lg text-[var(--text-secondary)]">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl tracking-wide italic glow-text text-center mb-12">
                        So läuft eine Sitzung ab
                    </h2>
                    <div className="space-y-8">
                        {process.map((step, i) => (
                            <div key={i} className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full glass flex items-center justify-center font-heading text-sm text-mystic-400">
                                    {i + 1}
                                </div>
                                <p className="font-body text-lg text-[var(--text-secondary)] leading-relaxed pt-2">
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Price */}
            {price && (
                <section className="py-12 px-4">
                    <div className="max-w-md mx-auto text-center glass rounded-2xl p-10 glow-border">
                        <span className="font-heading text-xs tracking-[0.3em] uppercase text-mystic-500 font-light">Preis</span>
                        <p className="font-display text-4xl sm:text-5xl glow-text italic mt-4 mb-3">{price}</p>
                        {priceNote && (
                            <p className="font-body text-sm text-mystic-400">{priceNote}</p>
                        )}
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-20 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="glass rounded-3xl p-14 glow-border">
                        <p className="font-body text-xl text-[var(--text-secondary)] mb-8 italic">
                            {cta}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                            <a
                                href="tel:+4941018205841"
                                className="px-8 py-4 bg-gradient-to-r from-mystic-600 to-rose-500 rounded-2xl font-heading text-sm tracking-widest uppercase text-white glow-hover transition-all"
                            >
                                📞 Jetzt anrufen
                            </a>
                            <a
                                href="https://wa.me/491788276800"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 glass rounded-2xl font-heading text-sm tracking-widest uppercase text-mystic-300 glow-hover transition-all border border-mystic-500/20"
                            >
                                💬 WhatsApp
                            </a>
                            {price && (
                                <a
                                    href="https://paypal.me/yvonneknupper"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 glass rounded-2xl font-heading text-sm tracking-widest uppercase text-[#00457C] hover:text-white bg-[#0079C1]/20 hover:bg-[#0079C1]/40 glow-hover transition-all border border-[#0079C1]/30 flex items-center justify-center gap-2"
                                >
                                    <span>💳</span> Mit PayPal zahlen
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Back Link */}
            <div className="text-center mt-8">
                <Link
                    href="/"
                    className="font-heading text-sm tracking-widest uppercase text-mystic-400 hover:text-rose-400 transition-colors"
                >
                    ← Zurück zur Startseite
                </Link>
            </div>
        </main>
    );
}
