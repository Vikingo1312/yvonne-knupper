export default function ImpressumPage() {
    return (
        <main className="pt-24 pb-20">
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-display text-4xl sm:text-5xl tracking-wide glow-text italic mb-12 text-center">
                        Impressum
                    </h1>
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent mx-auto mb-16" />

                    <div className="glass rounded-2xl p-10 space-y-10 font-body text-[var(--text-secondary)] leading-relaxed">

                        {/* ── Angaben gemäß Gesetz ── */}
                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">
                                Angaben gemäß § 5 DDG
                            </h2>
                            <p className="text-sm text-mystic-500 mb-4">(ehemals § 5 TMG – seit 14.05.2024 abgelöst durch das Digitale-Dienste-Gesetz)</p>
                            <p className="text-lg">
                                <strong className="text-white">Yvonne Knupper</strong><br />
                                Am Rathausplatz 12<br />
                                25462 Rellingen (bei Hamburg)
                            </p>
                        </div>

                        {/* ── Kontakt ── */}
                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">Kontakt</h2>
                            <p className="text-lg">
                                Telefon: <a href="tel:+4941018205841" className="text-mystic-400 hover:text-rose-400 transition-colors">+49 (0)41 01 / 820 58 41</a><br />
                                E-Mail: <a href="mailto:yvonne-knupper@gmx.de" className="text-mystic-400 hover:text-rose-400 transition-colors">yvonne-knupper@gmx.de</a>
                            </p>
                        </div>

                        {/* ── USt-IdNr ── */}
                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">Umsatzsteuer-ID</h2>
                            <p className="text-lg">
                                Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
                                <strong className="text-white">DE 275 344 622</strong>
                            </p>
                        </div>

                        {/* ── Aufsichtsbehörde ── */}
                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">Aufsichtsbehörde</h2>
                            <p className="text-lg">Lebensberatung</p>
                        </div>

                        {/* ── Berufsbezeichnung & Heilkunde-Hinweis ── */}
                        <div className="border border-rose-500/20 rounded-xl p-6 bg-rose-500/5">
                            <h2 className="font-display text-2xl italic glow-text mb-4">
                                ⚕️ Berufsbezeichnung und berufsrechtliche Regelungen
                            </h2>
                            <p className="text-lg mb-4">
                                <strong className="text-white">Berufsbezeichnung:</strong> Spirituelle Lebensberaterin / Energetische Arbeit
                            </p>
                            <div className="glass rounded-lg p-5 border border-mystic-800/30">
                                <p className="text-sm font-heading tracking-wider uppercase text-rose-400 mb-3">Wichtiger Hinweis</p>
                                <p className="text-base leading-relaxed">
                                    Meine Tätigkeit als spirituelle Lebensberaterin fällt <strong className="text-white">nicht</strong> unter das Heilpraktikergesetz (HPG).
                                    Ich stelle keine medizinischen Diagnosen, gebe keine Heilversprechen und führe keine Heilbehandlungen im medizinischen Sinne durch.
                                    Meine Arbeit ersetzt keine ärztliche, psychologische oder therapeutische Behandlung.
                                    Bei gesundheitlichen oder psychischen Beschwerden konsultieren Sie bitte einen Arzt, Heilpraktiker oder Therapeuten.
                                    Die Teilnahme an meinen Beratungen erfolgt in absoluter <strong className="text-white">Selbstverantwortung</strong> des Klienten.
                                </p>
                            </div>
                        </div>

                        {/* ── Haftungsausschluss ── */}
                        <div className="border-t border-mystic-800/30 pt-8 space-y-6">
                            <h2 className="font-display text-2xl italic glow-text mb-4">Haftungsausschluss</h2>

                            <div>
                                <h3 className="font-display text-xl italic text-mystic-300 mb-3">Haftung für Inhalte</h3>
                                <p>
                                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                                </p>
                            </div>

                            <div className="border border-amber-500/20 rounded-xl p-6 bg-amber-500/5">
                                <h3 className="font-display text-xl italic text-mystic-300 mb-3">Haftung für Links</h3>
                                <p className="mb-4">
                                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                                </p>
                                <div className="glass rounded-lg p-4 text-sm">
                                    <p className="font-heading tracking-wider uppercase text-amber-400 mb-2">📜 Gerichtsurteil zur Link-Haftung</p>
                                    <p>
                                        Mit Urteil vom <strong className="text-white">12. Mai 1998 – Az. 312 O 85/98</strong> hat das <strong className="text-white">Landgericht Hamburg</strong> entschieden, dass man durch die Anbringung eines Links die Inhalte der gelinkten Seite ggf. mit zu verantworten hat. Dies kann – so das LG – nur dadurch verhindert werden, dass man sich ausdrücklich von diesen Inhalten distanziert.
                                    </p>
                                    <p className="mt-3 text-mystic-300 italic">
                                        Hiermit distanzieren wir uns ausdrücklich von allen Inhalten aller gelinkten Seiten auf unserer Website und machen uns diese Inhalte nicht zu eigen. Diese Erklärung gilt für alle auf unserer Website angebrachten Links und für alle Inhalte der Seiten, zu denen die bei uns angemeldeten Banner und Links führen.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-display text-xl italic text-mystic-300 mb-3">Urheberrecht</h3>
                                <p>
                                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-display text-xl italic text-mystic-300 mb-3">Datenschutz</h3>
                                <p>
                                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.{"\u202f"}B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                                </p>
                                <p className="mt-4">
                                    Ausführliche Informationen finden Sie in unserer{" "}
                                    <a href="/datenschutz" className="text-mystic-400 hover:text-rose-400 transition-colors underline">Datenschutzerklärung</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
