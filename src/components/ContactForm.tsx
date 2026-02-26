"use client";

import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const services = [
        "Kartenlegen",
        "Dualseelen Coaching",
        "Kerzenrituale",
        "Matrix Quantenheilung",
        "Schamanische Reisen",
        "Sonstiges",
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || (!form.email && !form.phone)) {
            setError("Bitte gib Deinen Namen und mindestens eine Kontaktmöglichkeit an.");
            return;
        }

        setSending(true);
        setError("");

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSent(true);
                setForm({ name: "", email: "", phone: "", service: "", message: "" });
            } else {
                setError("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
            }
        } catch {
            setError("Verbindungsfehler. Bitte versuche es später erneut.");
        } finally {
            setSending(false);
        }
    };

    if (sent) {
        return (
            <div className="glass rounded-2xl p-10 glow-border text-center">
                <span className="text-5xl block mb-6">✨</span>
                <h3 className="font-display text-2xl italic glow-text mb-4">
                    Vielen Dank für Deine Nachricht!
                </h3>
                <p className="font-body text-[var(--text-secondary)] mb-6">
                    Ich melde mich so schnell wie möglich bei Dir. In Liebe, Yvonne ♡
                </p>
                <button
                    onClick={() => setSent(false)}
                    className="font-heading text-sm tracking-widest uppercase text-mystic-400 hover:text-rose-400 transition-colors"
                >
                    Weitere Nachricht senden →
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 glow-border space-y-5">
            <h3 className="font-display text-2xl italic glow-text text-center mb-2">
                Kontaktformular
            </h3>
            <p className="font-body text-sm text-[var(--text-secondary)] text-center mb-4">
                Schreib mir hier Dein Anliegen – ich melde mich bei Dir!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Dein Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[var(--bg-card)] border border-mystic-800/50 rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-mystic-600 focus:outline-none focus:border-mystic-500 transition-colors"
                    required
                />
                <input
                    type="email"
                    placeholder="Deine E-Mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[var(--bg-card)] border border-mystic-800/50 rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-mystic-600 focus:outline-none focus:border-mystic-500 transition-colors"
                />
                <input
                    type="tel"
                    placeholder="Deine Telefonnummer"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[var(--bg-card)] border border-mystic-800/50 rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-mystic-600 focus:outline-none focus:border-mystic-500 transition-colors"
                />
                <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[var(--bg-card)] border border-mystic-800/50 rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-mystic-500 transition-colors appearance-none"
                >
                    <option value="" className="bg-[var(--bg-card)] text-[var(--text-secondary)]">Interesse an...</option>
                    {services.map((s) => (
                        <option key={s} value={s} className="bg-[var(--bg-card)] text-[var(--text-primary)]">{s}</option>
                    ))}
                </select>
            </div>

            <textarea
                placeholder="Deine Nachricht..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-[var(--bg-card)] border border-mystic-800/50 rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-mystic-600 focus:outline-none focus:border-mystic-500 transition-colors resize-none"
            />

            {error && (
                <p className="text-rose-400 text-sm text-center">{error}</p>
            )}

            <button
                type="submit"
                disabled={sending}
                className="w-full px-8 py-4 bg-gradient-to-r from-mystic-600 to-rose-500 rounded-xl font-heading text-sm tracking-widest uppercase text-white glow-hover transition-all disabled:opacity-50"
            >
                {sending ? "Wird gesendet..." : "Nachricht senden ✨"}
            </button>

            <p className="text-xs text-center text-mystic-600">
                * Name und mindestens E-Mail oder Telefon erforderlich
            </p>
        </form>
    );
}
