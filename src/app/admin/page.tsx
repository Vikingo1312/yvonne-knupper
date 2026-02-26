"use client";

import { useEffect, useState } from "react";

interface Lead {
    id: number;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    status: string;
    created_at: string;
}

interface DashboardStats {
    totalLeads: number;
    newLeads: number;
    doneLeads: number;
    isLive: boolean;
    promoActive: boolean;
    recentLeads: Lead[];
}

export default function AdminDashboardPage() {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch("/api/leads").then(r => r.json()),
            fetch("/api/settings").then(r => r.json()),
        ]).then(([leadsData, settingsData]) => {
            const leads: Lead[] = leadsData.leads || [];
            const settings = settingsData.settings || {};

            setStats({
                totalLeads: leads.length,
                newLeads: leads.filter(l => l.status === "new").length,
                doneLeads: leads.filter(l => l.status === "done").length,
                isLive: settings.is_live === "true",
                promoActive: settings.promo_active === "true",
                recentLeads: leads.slice(0, 5),
            });
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    if (loading) {
        return <div className="text-white animate-pulse text-center py-20">Dashboard wird geladen...</div>;
    }

    return (
        <div className="space-y-8 max-w-5xl">
            <h1 className="font-display text-4xl italic glow-text mb-2">Dashboard</h1>
            <p className="text-[var(--text-secondary)] font-body mb-8">
                Willkommen zurück, Yvonne! ✨ Hier ist Deine Übersicht.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass rounded-2xl p-6 border border-mystic-800/30 text-center">
                    <p className="text-3xl font-display glow-text mb-1">{stats?.totalLeads || 0}</p>
                    <p className="text-xs font-heading tracking-widest uppercase text-mystic-500">Anfragen gesamt</p>
                </div>
                <div className="glass rounded-2xl p-6 border border-rose-500/30 text-center">
                    <p className="text-3xl font-display text-rose-400 mb-1">{stats?.newLeads || 0}</p>
                    <p className="text-xs font-heading tracking-widest uppercase text-mystic-500">Neue Anfragen</p>
                </div>
                <div className="glass rounded-2xl p-6 border border-green-500/30 text-center">
                    <p className="text-3xl font-display text-green-400 mb-1">{stats?.doneLeads || 0}</p>
                    <p className="text-xs font-heading tracking-widest uppercase text-mystic-500">Erledigt</p>
                </div>
                <div className="glass rounded-2xl p-6 border border-mystic-800/30 text-center">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading tracking-wider uppercase ${stats?.isLive ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                        <span className={`w-2 h-2 rounded-full ${stats?.isLive ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
                        {stats?.isLive ? "Live" : "Offline"}
                    </div>
                    <p className="text-xs font-heading tracking-widest uppercase text-mystic-500 mt-2">Status</p>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="/admin/leads" className="glass rounded-2xl p-6 border border-mystic-800/30 hover:border-rose-500/30 transition-colors group">
                    <span className="text-2xl block mb-3">📬</span>
                    <h3 className="font-display text-lg italic text-white group-hover:text-rose-400 transition-colors mb-1">Anfragen verwalten</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        {stats?.newLeads ? `${stats.newLeads} neue Anfrage${stats.newLeads > 1 ? "n" : ""}` : "Keine neuen Anfragen"}
                    </p>
                </a>
                <a href="/admin/settings" className="glass rounded-2xl p-6 border border-mystic-800/30 hover:border-mystic-500/30 transition-colors group">
                    <span className="text-2xl block mb-3">⚙️</span>
                    <h3 className="font-display text-lg italic text-white group-hover:text-mystic-400 transition-colors mb-1">Einstellungen</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Live-Status, Banner, Arbeitszeiten
                    </p>
                </a>
                <a href="https://yvonne-knupper.vercel.app" target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 border border-mystic-800/30 hover:border-green-500/30 transition-colors group">
                    <span className="text-2xl block mb-3">🌐</span>
                    <h3 className="font-display text-lg italic text-white group-hover:text-green-400 transition-colors mb-1">Website ansehen</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        yvonne-knupper.vercel.app
                    </p>
                </a>
            </div>

            {/* Recent Leads */}
            <div className="glass rounded-2xl p-6 border border-mystic-800/30">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-2xl italic glow-text">Letzte Anfragen</h2>
                    <a href="/admin/leads" className="font-heading text-xs tracking-widest uppercase text-mystic-400 hover:text-rose-400 transition-colors">
                        Alle anzeigen →
                    </a>
                </div>

                {(!stats?.recentLeads || stats.recentLeads.length === 0) ? (
                    <div className="text-center py-8">
                        <span className="text-4xl block mb-3">📭</span>
                        <p className="text-[var(--text-secondary)] font-body">
                            Noch keine Anfragen vorhanden. Sobald jemand das Kontaktformular ausfüllt, erscheinen die Daten hier.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {stats.recentLeads.map((lead) => (
                            <div key={lead.id} className="flex items-center gap-4 p-4 rounded-xl bg-surface-dark/30 hover:bg-surface-dark/50 transition-colors">
                                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${lead.status === "new" ? "bg-rose-400" : "bg-green-400"}`} />
                                <div className="flex-1 min-w-0">
                                    <p className="text-white font-body truncate">
                                        <strong>{lead.name}</strong>
                                        {lead.service && <span className="text-mystic-400 text-sm ml-2">· {lead.service}</span>}
                                    </p>
                                    <p className="text-xs text-mystic-500">
                                        {new Date(lead.created_at).toLocaleString("de-DE")}
                                    </p>
                                </div>
                                {lead.email && (
                                    <a href={`mailto:${lead.email}`} className="text-mystic-400 hover:text-rose-400 text-sm transition-colors flex-shrink-0">✉️</a>
                                )}
                                {lead.phone && (
                                    <a href={`tel:${lead.phone}`} className="text-mystic-400 hover:text-green-400 text-sm transition-colors flex-shrink-0">📞</a>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Promo Status */}
            {stats?.promoActive && (
                <div className="glass rounded-2xl p-4 border border-amber-500/30 text-center">
                    <p className="text-sm text-amber-400 font-heading tracking-wider uppercase">
                        ⚡ Aktions-Banner ist aktiv
                    </p>
                </div>
            )}
        </div>
    );
}
