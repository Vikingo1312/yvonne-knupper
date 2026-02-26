"use client";

import Image from "next/image";
import Link from "next/link";

export default function UeberMichPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-heading text-xs tracking-[0.5em] uppercase text-mystic-500 font-light">
                        ✦ Über mich ✦
                    </span>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl glow-text italic mt-4 mb-6">
                        Yvonne Knupper
                    </h1>
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent mx-auto" />
                </div>

                {/* Portrait + Bio */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Portrait */}
                    <div className="relative mx-auto lg:mx-0">
                        <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden glow-border">
                            <Image
                                src="/images/yvonne-hybrid.png"
                                alt="Yvonne Knupper"
                                width={384}
                                height={384}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-mystic-500/20 rounded-full blur-[40px] animate-float" />
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-rose-500/15 rounded-full blur-[30px] animate-float-slow" />
                    </div>

                    {/* Bio */}
                    <div className="space-y-5 font-body text-lg text-[var(--text-secondary)] leading-relaxed">
                        <p>
                            Ich bin <span className="text-mystic-400 italic">Yvonne Knupper</span> und entstamme einer alten Familie der Reisenden,
                            deren Wurzeln tief in der Tradition spiritueller Wahrnehmungen und intuitiver Weisheit verankert sind.
                            Meine Ahnen ließen sich um 1950 in Hamburg nieder. Das Erbe – die Offenheit für die Welt,
                            das Hören zwischen den Zeilen und das Sehen hinter den Schleiern – lebt in mir weiter.
                        </p>
                        <p>
                            Die Welt ist durchzogen von Kräften, die jenseits der sichtbaren Realität existieren.
                            In manchen Linien wird das Wissen um diese unsichtbaren Energien wie ein kostbarer Schatz
                            von einer Generation zur nächsten überliefert. Ich entstamme einer solchen traditionellen
                            <span className="text-rose-400 italic"> Blutlinie </span> von Menschen, die mit diesen Kräften vertraut sind
                            und deren Gabe der Transformation tief verwurzelt ist.
                        </p>
                        <p>
                            Was von meinen Ahnen gelebt wurde, ist mehr als eine erlernte Fähigkeit – es ist ein inneres Wissen,
                            dass man nicht erwirbt, sondern in sich trägt.
                        </p>
                    </div>
                </div>

                {/* Extended bio */}
                <div className="space-y-5 font-body text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto mb-16">
                    <p>
                        Schon als Kind spürte ich die feinen Schwingungen meiner Umgebung und wusste instinktiv,
                        wann das Licht entzündet werden musste und wann die Schatten nach Auflösung riefen.
                        Es ist ein <span className="text-accent-ice italic">innerer Kompass</span>, der mich führt –
                        eine traditionelle Gabe, die von meiner Familie stets als Geschenk betrachtet wurde.
                    </p>
                    <p>
                        Seit meiner Geburt trage ich die Gabe des Sehens, der Feinfühligkeit und der intuitiven Verbindung
                        zu den feinstofflichen Energien in mir. Dieses innere Wissen wurde über Generationen hinweg
                        weitergegeben – tief, ursprünglich und kraftvoll.
                    </p>
                    <p>
                        Ich habe es mir zur Aufgabe gemacht, dieses uralte Wissen weiterzuführen und zu teilen.
                        In meiner energetischen Arbeit fließen <span className="text-mystic-400 italic">Weissagungskunst</span> und
                        mein intuitives Sehen, Fühlen und Hören zusammen, um verborgene Wahrheiten sichtbar zu machen.
                    </p>
                    <p>
                        Meine Beratungen sind ein Wegweiser in die verborgenen Räume Deines Bewusstseins.
                        Lösungsorientiert, aber zugleich von einer alten, leisen Magie durchdrungen, öffne ich Dir
                        neue Pfade des Denkens und erschaffe mit Dir gemeinsam heilsame Gedanken und kraftvolle Glaubenssätze.
                    </p>
                    <p>
                        Mit den Karten, meiner Intuition und den medialen Eingebungen, die durch meine Ahnenlinie zu mir sprechen,
                        begleite ich Dich zurück auf Deinen wahren Lebensweg und führe Dich Schritt für Schritt zu Deinem Ziel.
                    </p>
                    <p>
                        Gemeinsam tauchen wir unter die Oberfläche – dorthin, wo die Seele flüstert und wo Deine Wahrheit längst wartet.
                        Oft ist ein vermeintliches Problem nur ein Schleier, ein Schutzmantel Deiner Seele,
                        der etwas viel Tieferes verbirgt: eine <span className="text-rose-400 italic">Sehnsucht</span>, die gesehen werden will.
                    </p>
                    <p>
                        Durch meine zusätzliche schamanische Ausbildung, sowie die Ausbildung zum Psychologischen Berater/Personal Coach,
                        ist es mir möglich, Dich ganzheitlich auf Deinem Weg zu begleiten. Ich bin in der Lage, in Deinem Energiekörper
                        zu wirken, Blockaden zu lösen und die verlorene Kraft zurückzuholen.
                    </p>
                    <p className="text-mystic-300 italic text-center mt-8">
                        Jede meiner Beratungen ist individuell und ich freue mich, Dich begleiten zu dürfen.
                    </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/kontakt"
                        className="inline-block px-10 py-4 bg-gradient-to-r from-mystic-600 to-rose-500 rounded-2xl font-heading text-sm tracking-widest uppercase text-white glow-hover transition-all duration-400 hover:shadow-lg hover:shadow-mystic-500/25"
                    >
                        Kontaktiere mich
                    </Link>
                </div>
            </div>
        </main>
    );
}
