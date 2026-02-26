export default function AdminDashboardPage() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="font-display text-4xl italic glow-text mb-8">Übersicht</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-surface-card border border-mystic-800/30 rounded-2xl p-6 glass">
                    <h3 className="text-xl font-display text-mystic-300 italic mb-2">Einstellungen</h3>
                    <p className="text-[var(--text-secondary)] mb-6 text-sm">
                        Live-Status ändern, Aktions-Banner schalten und Arbeitszeiten anpassen.
                    </p>
                    <a href="/admin/settings" className="px-4 py-2 bg-gradient-to-r from-mystic-600 to-rose-500 rounded-lg text-sm text-white hover:opacity-90 inline-block font-heading tracking-wider uppercase">
                        Zu Einstellungen →
                    </a>
                </div>

                <div className="bg-surface-card border border-mystic-800/30 rounded-2xl p-6 glass">
                    <h3 className="text-xl font-display text-mystic-300 italic mb-2">Anfragen</h3>
                    <p className="text-[var(--text-secondary)] mb-6 text-sm">
                        Eingehende Kundenanfragen und Leads verwalten.
                    </p>
                    <a href="/admin/leads" className="px-4 py-2 bg-gradient-to-r from-mystic-600 to-rose-500 rounded-lg text-sm text-white hover:opacity-90 inline-block font-heading tracking-wider uppercase">
                        Zu Anfragen →
                    </a>
                </div>
            </div>

            <div className="bg-surface-dark border border-mystic-800/30 rounded-2xl p-8 mt-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-mystic-500/10 rounded-full blur-[40px]" />
                <h2 className="font-display text-2xl italic text-white mb-4">Willkommen, Yvonne! ✨</h2>
                <p className="text-[var(--text-secondary)] font-body">
                    Dies ist dein neues Admin Panel. Hier hast du die volle Kontrolle über deine Website. Du kannst oben Links durch die Navigation klicken, um deine Verfügbarkeit (Live-Status), Sprechzeiten und Kundenanfragen zu verwalten.
                </p>
            </div>
        </div>
    );
}
