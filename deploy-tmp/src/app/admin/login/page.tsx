"use client";

import { useState } from "react";
import { loginAdmin } from "@/app/admin/actions";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        setLoading(true);
        setError(null);

        const result = await loginAdmin(formData);

        if (result?.error) {
            setError(result.error);
            setLoading(false);
        } else {
            router.push("/admin");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-4">
            <div className="w-full max-w-md glass rounded-3xl p-8 glow-border text-center">
                <span className="font-heading text-xs tracking-[0.5em] uppercase text-mystic-500 font-light mb-4 block">
                    Geschützter Bereich
                </span>
                <h1 className="font-display text-4xl italic glow-text mb-8">Admin Login</h1>

                <form action={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="username"
                            required
                            placeholder="Benutzername"
                            className="w-full bg-surface-dark/50 border border-mystic-800/50 rounded-xl px-4 py-4 text-white placeholder-mystic-600 focus:outline-none focus:border-mystic-500 transition-colors text-center"
                        />
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Passwort eingeben"
                            className="w-full bg-surface-dark/50 border border-mystic-800/50 rounded-xl px-4 py-4 text-white placeholder-mystic-600 focus:outline-none focus:border-mystic-500 transition-colors text-center"
                        />
                    </div>

                    {error && (
                        <p className="text-rose-400 text-sm font-body">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-8 py-4 bg-gradient-to-r from-mystic-600 to-rose-500 rounded-xl font-heading text-sm tracking-widest uppercase text-white glow-hover transition-all disabled:opacity-50"
                    >
                        {loading ? "Wird überprüft..." : "Einloggen"}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-mystic-800/30">
                    <a href="/" className="font-heading text-xs tracking-widest uppercase text-mystic-500 hover:text-mystic-300 transition-colors">
                        ← Zurück zur Website
                    </a>
                </div>
            </div>
        </div>
    );
}
