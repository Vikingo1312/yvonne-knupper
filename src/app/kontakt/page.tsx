import { initDB } from "@/lib/db";
import Link from "next/link";

export default async function KontaktPage() {
    let workingHours = "Individuelle Terminvereinbarung nach Absprache.";
    try {
        const db = await initDB();
        const res = await db.execute("SELECT value FROM settings WHERE key = 'working_hours'");
        if (res.rows.length > 0) {
            workingHours = res.rows[0].value as string;
        }
    } catch (err) {
        console.error("Failed to load working hours:", err);
    }

    return (
        <main className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto text-center">
                {/* Header */}
                <span className="font-heading text-xs tracking-[0.5em] uppercase text-mystic-500 font-light">
                    ✦ Ich freue mich auf dich ✦
                </span>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl glow-text italic mt-4 mb-6">
                    Kontakt
                </h1>
                <p className="font-body text-lg text-[var(--text-secondary)] leading-relaxed mb-16 max-w-xl mx-auto">
                    Du möchtest einen Termin vereinbaren oder hast Fragen zu meinen Angeboten?
                    Da jede Beratung ganz individuell auf deine Fragen und Themen abgestimmt ist,
                    kontaktiere mich bitte bezüglich Termin und Preis.
                </p>

                <div className="w-32 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent mx-auto mb-16" />

                {/* Contact info cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                    {/* Phone */}
                    <div className="glass rounded-2xl p-8 glow-border">
                        <span className="text-4xl block mb-4">📞</span>
                        <h3 className="font-display text-xl italic mb-2">Telefon</h3>
                        <p className="font-body text-[var(--text-secondary)] mb-4">
                            Ich freue mich auf deinen Anruf für ein persönliches Gespräch.
                        </p>
                        <a
                            href="tel:+4941018205841"
                            className="font-heading text-sm tracking-wider uppercase text-mystic-400 hover:text-rose-400 transition-colors"
                        >
                            +49 (0)41 018205841
                        </a>
                    </div>

                    {/* Email */}
                    <div className="glass rounded-2xl p-8 glow-border">
                        <span className="text-4xl block mb-4">✉️</span>
                        <h3 className="font-display text-xl italic mb-2">E-Mail</h3>
                        <p className="font-body text-[var(--text-secondary)] mb-4">
                            Schreib mir eine Nachricht – ich melde mich bei dir.
                        </p>
                        <a
                            href="mailto:yvonne-knupper@gmx.de"
                            className="font-heading text-sm tracking-wider uppercase text-mystic-400 hover:text-rose-400 transition-colors"
                        >
                            yvonne-knupper@gmx.de
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="glass rounded-2xl p-8 glow-border">
                        <span className="text-4xl block mb-4">💬</span>
                        <h3 className="font-display text-xl italic mb-2">WhatsApp</h3>
                        <p className="font-body text-[var(--text-secondary)] mb-4">
                            Schnell und unkompliziert per Nachricht.
                        </p>
                        <a
                            href="https://wa.me/491788276800"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-heading text-sm tracking-wider uppercase text-mystic-400 hover:text-rose-400 transition-colors"
                        >
                            Nachricht senden →
                        </a>
                    </div>

                    {/* Availability */}
                    <div className="glass rounded-2xl p-8 glow-border">
                        <span className="text-4xl block mb-4">🕐</span>
                        <h3 className="font-display text-xl italic mb-2">Beratungen</h3>
                        <p className="font-body text-[var(--text-secondary)] mb-4">
                            {workingHours}
                        </p>
                        <span className="font-heading text-sm tracking-wider uppercase text-mystic-400">
                            Telefonisch & per WhatsApp
                        </span>
                    </div>
                </div>

                {/* Back link */}
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
