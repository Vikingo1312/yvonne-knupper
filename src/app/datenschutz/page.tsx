export default function DatenschutzPage() {
    return (
        <main className="pt-24 pb-20">
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-display text-4xl sm:text-5xl tracking-wide glow-text italic mb-12 text-center">
                        Datenschutzerklärung
                    </h1>
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent mx-auto mb-16" />

                    <div className="glass rounded-2xl p-10 space-y-8 font-body text-[var(--text-secondary)] leading-relaxed">

                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">1. Datenschutz auf einen Blick</h2>
                            <h3 className="font-display text-xl italic text-mystic-300 mb-3">Allgemeine Hinweise</h3>
                            <p>
                                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer nachfolgend aufgeführten Datenschutzerklärung.
                            </p>

                            <h3 className="font-display text-xl italic text-mystic-300 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
                            <p className="mb-4">
                                <strong className="text-white">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:<br /><br />
                                Yvonne Knupper<br />
                                Am Rathausplatz 12<br />
                                25462 Rellingen<br />
                                E-Mail: <a href="mailto:yvonne-knupper@gmx.de" className="text-mystic-400 hover:text-rose-400 transition-colors">yvonne-knupper@gmx.de</a><br />
                                Telefon: <a href="tel:+4941018205841" className="text-mystic-400 hover:text-rose-400 transition-colors">+49 (0)41 01 / 820 58 41</a>
                            </p>

                            <p className="mb-4">
                                <strong className="text-white">Wie erfassen wir Ihre Daten?</strong><br />
                                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.{"\u202f"}B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder per E-Mail, Telefon oder WhatsApp übermitteln. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.{"\u202f"}B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                            </p>

                            <p>
                                <strong className="text-white">Wofür nutzen wir Ihre Daten?</strong><br />
                                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Wenn Sie uns über das Kontaktformular, per E-Mail, Telefon oder WhatsApp kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage verwendet.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">2. Hosting</h2>
                            <p>
                                Diese Website wird bei <strong className="text-white">Vercel Inc.</strong> gehostet. Details entnehmen Sie der Datenschutzerklärung von Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-mystic-400 hover:text-rose-400 transition-colors underline">https://vercel.com/legal/privacy-policy</a>. Die Verwendung von Vercel erfolgt auf Grundlage von Art.{"\u00a0"}6 Abs.{"\u00a0"}1 lit.{"\u00a0"}f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

                            <h3 className="font-display text-xl italic text-mystic-300 mb-3">Datenschutz</h3>
                            <p className="mb-4">
                                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                            </p>

                            <h3 className="font-display text-xl italic text-mystic-300 mb-3 mt-6">Widerruf Ihrer Einwilligung</h3>
                            <p>
                                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                            </p>

                            <h3 className="font-display text-xl italic text-mystic-300 mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                            <p>
                                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">4. Datenerfassung auf dieser Website</h2>

                            <h3 className="font-display text-xl italic text-mystic-300 mb-3">Cookies</h3>
                            <p className="mb-4">
                                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher zu machen. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                            </p>

                            <h3 className="font-display text-xl italic text-mystic-300 mb-3 mt-6">Kontaktaufnahme</h3>
                            <p>
                                Wenn Sie uns per Kontaktformular, E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage, Telefonnummer, E-Mail-Adresse) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art.{"\u00a0"}6 Abs.{"\u00a0"}1 lit.{"\u00a0"}b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                            </p>

                            <h3 className="font-display text-xl italic text-mystic-300 mb-3 mt-6">Lokale Speicherung (LocalStorage)</h3>
                            <p>
                                Wir verwenden die lokale Speicherung Ihres Browsers (LocalStorage), um die Tageskarten-Funktion bereitzustellen. Dabei wird gespeichert, welche Karte Sie heute gezogen haben, damit Sie pro Tag nur eine Karte ziehen können. Diese Daten bleiben ausschließlich auf Ihrem Gerät und werden nicht an uns übermittelt.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display text-2xl italic glow-text mb-4">5. Hinweis zur Beratungstätigkeit</h2>
                            <p>
                                Meine Tätigkeit als spirituelle Lebensberaterin fällt nicht unter das Heilpraktikergesetz (HPG). Ich stelle keine medizinischen Diagnosen, gebe keine Heilversprechen und führe keine Heilbehandlungen im medizinischen Sinne durch. Meine Arbeit ersetzt keine ärztliche, psychologische oder therapeutische Behandlung. Bei gesundheitlichen Beschwerden konsultieren Sie bitte einen Arzt oder Heilpraktiker.
                            </p>
                        </div>

                        <div className="border-t border-mystic-800/30 pt-6 text-sm text-mystic-500">
                            <p>Stand: Februar 2026</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
