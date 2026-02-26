"use client";

import { useEffect, useState } from "react";

type LeadStatus = "new" | "done";

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

export default function AdminLeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/leads")
            .then((res) => res.json())
            .then((data) => {
                if (data.leads) setLeads(data.leads);
                setLoading(false);
            });
    }, []);

    const updateStatus = async (id: number, status: LeadStatus) => {
        try {
            const res = await fetch("/api/leads", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, status }),
            });
            if (res.ok) {
                setLeads(leads.map(l => l.id === id ? { ...l, status } : l));
            }
        } catch (err) {
            console.error("Failed to update status:", err);
        }
    };

    const deleteLead = async (id: number) => {
        if (!confirm("Anfrage wirklich löschen?")) return;
        try {
            const res = await fetch("/api/leads", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (res.ok) {
                setLeads(leads.filter(l => l.id !== id));
            }
        } catch (err) {
            console.error("Failed to delete lead:", err);
        }
    };

    if (loading) return <div className="text-white animate-pulse">Lade Anfragen...</div>;

    return (
        <div className="max-w-5xl">
            <div className="flex items-center justify-between mb-8">
                <h1 className="font-display text-4xl italic glow-text">Kundenanfragen</h1>
                <span className="text-sm font-heading tracking-wider uppercase text-mystic-500">
                    {leads.filter(l => l.status === "new").length} neue
                </span>
            </div>

            {leads.length === 0 ? (
                <div className="glass p-8 rounded-2xl border border-mystic-800/30 text-center">
                    <p className="text-[var(--text-secondary)] font-body">Noch keine Anfragen vorhanden. Sobald jemand das Kontaktformular ausfüllt, erscheinen die Daten hier.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {leads.map((lead) => (
                        <div key={lead.id} className="glass p-6 rounded-2xl border border-mystic-800/30 flex flex-col md:flex-row gap-6 hover:border-mystic-500/30 transition-colors">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="font-display text-xl text-white">{lead.name}</h3>
                                    <span className="text-xs bg-mystic-800/50 text-mystic-300 px-2 py-1 rounded-md border border-mystic-700/30">
                                        {new Date(lead.created_at).toLocaleString("de-DE")}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)] mb-4">
                                    {lead.email && <span>✉️ <a href={`mailto:${lead.email}`} className="hover:text-mystic-300">{lead.email}</a></span>}
                                    {lead.phone && <span>📞 <a href={`tel:${lead.phone}`} className="hover:text-mystic-300">{lead.phone}</a></span>}
                                    {lead.service && <span className="text-rose-400">Interesse an: {lead.service}</span>}
                                </div>

                                {lead.message && (
                                    <div className="bg-surface-dark/50 p-4 rounded-xl border border-mystic-800/20 text-sm italic text-gray-300">
                                        &quot;{lead.message}&quot;
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col justify-center gap-2 border-t md:border-t-0 md:border-l border-mystic-800/30 pt-4 md:pt-0 md:pl-6 min-w-[130px]">
                                <span className={`text-xs text-center px-2 py-1 rounded-full ${lead.status === "new" ? "bg-rose-500/20 text-rose-400" : "bg-green-500/20 text-green-400"}`}>
                                    {lead.status === "new" ? "● Neu" : "✓ Erledigt"}
                                </span>
                                {lead.status === "new" ? (
                                    <button onClick={() => updateStatus(lead.id, "done")} className="bg-green-800/50 text-green-300 py-2 rounded-lg text-sm hover:bg-green-700/50 transition-colors">
                                        Als erledigt ✓
                                    </button>
                                ) : (
                                    <button onClick={() => updateStatus(lead.id, "new")} className="bg-mystic-800/50 text-mystic-300 py-2 rounded-lg text-sm hover:bg-mystic-700/50 transition-colors">
                                        Wieder öffnen
                                    </button>
                                )}
                                {lead.phone && (
                                    <a href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366]/20 text-[#25D366] py-2 rounded-lg text-sm hover:bg-[#25D366]/30 text-center transition-colors">
                                        WhatsApp
                                    </a>
                                )}
                                <button onClick={() => deleteLead(lead.id)} className="bg-red-900/30 text-red-400 py-2 rounded-lg text-sm hover:bg-red-800/40 transition-colors">
                                    Löschen
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
