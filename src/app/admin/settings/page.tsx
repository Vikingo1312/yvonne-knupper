"use client";

import { useEffect, useState } from "react";

export default function AdminSettingsPage() {
    const [settings, setSettings] = useState({
        is_live: "false",
        working_hours: "Nach Vereinbarung",
        promo_active: "false",
        promo_text: "",
    });
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api/settings")
            .then((res) => res.json())
            .then((data) => {
                if (data.settings) {
                    setSettings({ ...settings, ...data.settings });
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setSettings({ ...settings, [name]: checked ? "true" : "false" });
        } else {
            setSettings({ ...settings, [name]: value });
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage("");

        try {
            const res = await fetch("/api/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(settings),
            });

            if (res.ok) {
                setMessage("✅ Einstellungen erfolgreich gespeichert!");
            } else {
                setMessage("❌ Fehler beim Speichern.");
            }
        } catch {
            setMessage("❌ Fehler beim Speichern.");
        } finally {
            setSaving(false);
            setTimeout(() => setMessage(""), 3000);
        }
    };

    return (
        <div className="max-w-2xl">
            <h1 className="font-display text-4xl italic glow-text mb-8">Einstellungen</h1>

            <form onSubmit={handleSave} className="space-y-8 glass p-8 rounded-2xl border border-mystic-800/30">
                {/* Live Toggle */}
                <div className="space-y-4 pb-6 border-b border-mystic-800/30">
                    <div>
                        <h3 className="text-xl font-display text-white italic">Live Status</h3>
                        <p className="text-sm text-[var(--text-secondary)] mt-1">
                            Zeige Besuchern ganz oben auf der Website an, dass du gerade verfügbar bist.
                        </p>
                    </div>
                    <label className="flex items-center gap-4 cursor-pointer">
                        <input
                            type="checkbox"
                            name="is_live"
                            checked={settings.is_live === "true"}
                            onChange={handleChange}
                            className="w-5 h-5 accent-rose-500 cursor-pointer"
                        />
                        <span className="font-heading tracking-widest uppercase text-sm text-[var(--text-primary)]">
                            Ich bin gerade Live
                        </span>
                    </label>
                </div>

                {/* Working Hours */}
                <div className="space-y-4 pb-6 border-b border-mystic-800/30">
                    <div>
                        <h3 className="text-xl font-display text-white italic">Arbeitszeiten & Verfügbarkeit</h3>
                        <p className="text-sm text-[var(--text-secondary)] mt-1">
                            Dieser Text wird auf der Kontakt-Seite angezeigt. Du kannst ihn jederzeit anpassen.
                        </p>
                    </div>
                    <input
                        type="text"
                        name="working_hours"
                        value={settings.working_hours}
                        onChange={handleChange}
                        className="w-full bg-surface-dark border border-mystic-800/30 rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-mystic-500"
                        placeholder="z.B. Mo-Fr 10:00 - 18:00 Uhr"
                    />
                </div>

                {/* Promo Banner */}
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-display text-white italic">Aktions-Banner</h3>
                        <p className="text-sm text-[var(--text-secondary)] mt-1">
                            Zeige ein schmales Banner ganz oben auf der Website an, z.B. für besondere Angebote oder Urlaubszeiten.
                        </p>
                    </div>

                    <label className="flex items-center gap-4 cursor-pointer mb-4">
                        <input
                            type="checkbox"
                            name="promo_active"
                            checked={settings.promo_active === "true"}
                            onChange={handleChange}
                            className="w-5 h-5 accent-mystic-500 cursor-pointer"
                        />
                        <span className="font-heading tracking-widest uppercase text-sm text-[var(--text-primary)]">
                            Aktions-Banner aktivieren
                        </span>
                    </label>

                    <textarea
                        name="promo_text"
                        value={settings.promo_text}
                        onChange={handleChange}
                        className="w-full h-24 bg-surface-dark border border-mystic-800/30 rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-mystic-500"
                        placeholder="z.B. 🔮 Diese Woche: 20% Rabatt auf alle Kartenlegungen! ✨"
                    />
                </div>

                <div className="pt-6 flex items-center justify-between">
                    <button
                        type="submit"
                        disabled={saving}
                        className="px-8 py-3 bg-gradient-to-r from-mystic-600 to-rose-500 rounded-xl text-white font-heading tracking-widest uppercase text-sm hover:opacity-90 disabled:opacity-50 transition-opacity"
                    >
                        {saving ? "Speichert..." : "Speichern"}
                    </button>
                    {message && (
                        <span className="text-sm font-body text-mystic-300 animate-fade-in-up">
                            {message}
                        </span>
                    )}
                </div>
            </form>
        </div>
    );
}
