export default function ImpressumPage() {
    return (
        <main className="pt-24 pb-20">
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-display text-4xl sm:text-5xl tracking-wide glow-text italic mb-12 text-center">
                        Impressum
                    </h1>
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent mx-auto mb-16" />

                    <div className="glass rounded-2xl p-10 space-y-8 font-body text-[var(--text-secondary)] leading-relaxed">
                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">Angaben gemäß § 5 TMG</h2>
                            <p className="text-lg">
                                <strong className="text-white">Yvonne Knupper</strong><br />
                                Am Rathausplatz 12<br />
                                25462 Rellingen (bei Hamburg)
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">Kontakt</h2>
                            <p className="text-lg">
                                Telefon: <a href="tel:+4941018205841" className="text-mystic-400 hover:text-rose-400 transition-colors">+49 (0)41 01 / 820 58 41</a><br />
                                E-Mail: <a href="mailto:yvonne-knupper@gmx.de" className="text-mystic-400 hover:text-rose-400 transition-colors">yvonne-knupper@gmx.de</a>
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">Umsatzsteuer-ID</h2>
                            <p className="text-lg">
                                Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
                                <strong className="text-white">DE 275 344 622</strong>
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">Aufsichtsbehörde</h2>
                            <p className="text-lg">Lebensberatung</p>
                        </div>

                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                            <p className="text-lg">
                                Spirituelle Lebensberatung / Energetische Arbeit<br /><br />
                                <strong className="text-mystic-300">Hinweis:</strong> Meine Arbeit ersetzt keine ärztliche, psychologische oder therapeutische Behandlung. Ich stelle keine Diagnosen und gebe keine Heilversprechen. Meine Tätigkeit als spirituelle Lebensberaterin fällt nicht unter das Heilpraktikergesetz (HPG). bei gesundheitlichen Beschwerden konsultieren Sie bitte einen Arzt oder Heilpraktiker.
                            </p>
                        </div>

                        <div className="border-t border-mystic-800/30 pt-8">
                            <h2 className="font-display text-2xl italic glow-text mb-4">Haftungsausschluss</h2>

                            <h3 className="font-display text-xl italic text-mystic-300 mb-3 mt-6">Haftung für Inhalte</h3>
                            <p>
                                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                            </p>

                            <h3 className="font-display text-xl italic text-mystic-300 mb-3 mt-6">Haftung für Links</h3>
                            <p>
                                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                            </p>

                            <h3 className="font-display text-xl italic text-mystic-300 mb-3 mt-6">Urheberrecht</h3>
                            <p>
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
