"use client";

import { useState, useEffect, useMemo } from "react";

/* ═══════════════════════════════════════
   COMPLETE LENORMAND DECK – 36 CARDS
   ═══════════════════════════════════════ */
const lenormandDeck = [
    { id: 1, name: "Der Reiter", emoji: "🏇", meaning: "Nachrichten, Neuigkeiten und frohe Botschaften sind unterwegs zu dir. Etwas Neues kündigt sich an – sei offen für Bewegung und Veränderung.", keywords: ["Nachrichten", "Bewegung", "Neuanfang"] },
    { id: 2, name: "Der Klee", emoji: "🍀", meaning: "Ein kleines Glück wartet auf dich! Sei aufmerksam für die kleinen Freuden des Lebens – sie sind die wahren Geschenke des Universums.", keywords: ["Glück", "Freude", "Zufall"] },
    { id: 3, name: "Das Schiff", emoji: "⛵", meaning: "Eine Reise steht bevor – ob im Außen oder in deinem Inneren. Lass dich von deiner Sehnsucht leiten, sie kennt den Weg.", keywords: ["Reise", "Sehnsucht", "Ferne"] },
    { id: 4, name: "Das Haus", emoji: "🏠", meaning: "Dein Zuhause, deine Familie, deine Wurzeln brauchen heute Aufmerksamkeit. Finde Stabilität in dem, was dir vertraut ist.", keywords: ["Zuhause", "Familie", "Geborgenheit"] },
    { id: 5, name: "Der Baum", emoji: "🌳", meaning: "Achte heute besonders auf deine Gesundheit und Lebensenergie. Wie ein Baum brauchst du feste Wurzeln, um in den Himmel zu wachsen.", keywords: ["Gesundheit", "Wachstum", "Lebenskraft"] },
    { id: 6, name: "Die Wolken", emoji: "☁️", meaning: "Manchmal braucht der Himmel Wolken, damit der Regen fallen kann. Vertraue darauf, dass sich die Unklarheiten bald lichten werden.", keywords: ["Unklarheit", "Verwirrung", "Klärung"] },
    { id: 7, name: "Die Schlange", emoji: "🐍", meaning: "Der Weg mag gewunden sein, doch jede Kurve bringt dich näher an dein Ziel. Achte auf deine Intuition – sie warnt dich vor Umwegen.", keywords: ["Umwege", "Weisheit", "Intuition"] },
    { id: 8, name: "Der Sarg", emoji: "⚰️", meaning: "Etwas Altes darf heute gehen. In jedem Ende liegt ein Neuanfang verborgen. Lass los, was dir nicht mehr dient.", keywords: ["Ende", "Transformation", "Loslassen"] },
    { id: 9, name: "Die Blumen", emoji: "💐", meaning: "Freude und Schönheit umgeben dich heute. Öffne dein Herz für die kleinen Überraschungen, die das Leben für dich bereithält.", keywords: ["Freude", "Schönheit", "Überraschung"] },
    { id: 10, name: "Die Sense", emoji: "⚔️", meaning: "Eine plötzliche Wendung steht an. Sei achtsam mit deinen Entscheidungen heute – manchmal muss man ernten, was man gesät hat.", keywords: ["Entscheidung", "Ernte", "Achtsamkeit"] },
    { id: 11, name: "Die Ruten", emoji: "🌿", meaning: "Gespräche und Austausch stehen im Vordergrund. Achte darauf, deine Worte mit Bedacht zu wählen – sie haben heute besondere Kraft.", keywords: ["Kommunikation", "Klärung", "Dialog"] },
    { id: 12, name: "Die Eulen", emoji: "🦉", meaning: "Lass dich nicht von Sorgen überwältigen. Die Eulen mahnen dich, die Dinge ruhiger anzugehen und auf deine innere Weisheit zu hören.", keywords: ["Weisheit", "Ruhe", "Besonnenheit"] },
    { id: 13, name: "Das Kind", emoji: "👶", meaning: "Ein Neuanfang liegt in der Luft! Begegne dem Tag mit der Offenheit und dem Staunen eines Kindes – alles ist möglich.", keywords: ["Neuanfang", "Unschuld", "Offenheit"] },
    { id: 14, name: "Der Fuchs", emoji: "🦊", meaning: "Vertraue heute besonders auf deine Klugheit. Nicht alles ist, wie es scheint – schaue hinter die Fassaden.", keywords: ["Klugheit", "Vorsicht", "Scharfsinn"] },
    { id: 15, name: "Der Bär", emoji: "🐻", meaning: "Stärke und Macht begleiten dich heute. Stehe für dich ein und vertraue auf deine innere Kraft.", keywords: ["Stärke", "Schutz", "Autorität"] },
    { id: 16, name: "Die Sterne", emoji: "⭐", meaning: "Klarheit und Inspiration durchfluten deinen Tag. Die Sterne leuchten dir den Weg – folge deiner Vision und deinen Träumen.", keywords: ["Klarheit", "Inspiration", "Hoffnung"] },
    { id: 17, name: "Die Störche", emoji: "🦢", meaning: "Veränderungen kommen auf dich zu. Begrüße sie mit offenen Armen – sie bringen die Erneuerung, nach der du dich sehnst.", keywords: ["Veränderung", "Erneuerung", "Wandel"] },
    { id: 18, name: "Der Hund", emoji: "🐕", meaning: "Treue und Freundschaft stehen heute im Mittelpunkt. Ein verlässlicher Mensch ist an deiner Seite – oder du darfst einer sein.", keywords: ["Treue", "Freundschaft", "Loyalität"] },
    { id: 19, name: "Der Turm", emoji: "🏰", meaning: "Ziehe dich bewusst zurück und finde Kraft in der Stille. Manchmal brauchen wir den Rückzug, um klarer zu sehen.", keywords: ["Rückzug", "Klarheit", "Stille"] },
    { id: 20, name: "Der Garten", emoji: "🌺", meaning: "Geselligkeit und Gemeinschaft rufen dich heute. Gehe unter Menschen, tausche dich aus und genieße die Verbundenheit.", keywords: ["Gemeinschaft", "Geselligkeit", "Austausch"] },
    { id: 21, name: "Der Berg", emoji: "⛰️", meaning: "Ein Hindernis auf deinem Weg? Sieh es als Einladung, über dich hinauszuwachsen. Jeder Berg hat einen Gipfel.", keywords: ["Hindernis", "Ausdauer", "Überwindung"] },
    { id: 22, name: "Die Wege", emoji: "🔀", meaning: "Eine Entscheidung steht an. Höre tief in dich hinein – deine Seele kennt den richtigen Pfad bereits.", keywords: ["Entscheidung", "Wahl", "Intuition"] },
    { id: 23, name: "Die Mäuse", emoji: "🐭", meaning: "Lass los, was dich belastet. Manchmal muss man Ballast abwerfen, um leichter durch das Leben zu gleiten.", keywords: ["Loslassen", "Leichtigkeit", "Befreiung"] },
    { id: 24, name: "Das Herz", emoji: "❤️", meaning: "Die Liebe ist dein Begleiter heute. Ob romantisch oder in tiefer Selbstliebe – öffne dein Herz und lass die Wärme hinein.", keywords: ["Liebe", "Zuneigung", "Herzenswärme"] },
    { id: 25, name: "Der Ring", emoji: "💍", meaning: "Verbindungen und Versprechen stehen heute im Fokus. Achte auf die Bande, die dich mit anderen verbinden.", keywords: ["Verbindung", "Treue", "Versprechen"] },
    { id: 26, name: "Das Buch", emoji: "📖", meaning: "Ein Geheimnis möchte enthüllt werden. Bleibe neugierig und offen für das Wissen, das heute zu dir kommt.", keywords: ["Wissen", "Geheimnis", "Erkenntnis"] },
    { id: 27, name: "Der Brief", emoji: "✉️", meaning: "Eine wichtige Nachricht erreicht dich – ob geschrieben, gesprochen oder gefühlt. Achte auf die Zeichen um dich herum.", keywords: ["Nachricht", "Zeichen", "Botschaft"] },
    { id: 28, name: "Der Herr", emoji: "🤴", meaning: "Eine männliche Energie beeinflusst deinen Tag. Es kann ein Mensch sein oder die aktive, handelnde Kraft in dir selbst.", keywords: ["Persönlichkeit", "Handlung", "Willenskraft"] },
    { id: 29, name: "Die Dame", emoji: "👸", meaning: "Die weibliche, empfangende Energie ist heute stark. Vertraue auf deine Intuition und deine innere Weisheit.", keywords: ["Intuition", "Empfänglichkeit", "Weisheit"] },
    { id: 30, name: "Die Lilie", emoji: "🌸", meaning: "Harmonie und innerer Frieden durchströmen deinen Tag. Genieße die Stille und die Würde des Augenblicks.", keywords: ["Harmonie", "Frieden", "Würde"] },
    { id: 31, name: "Die Sonne", emoji: "☀️", meaning: "Großes Glück und Lebensfreude strahlen heute auf dich herab! Genieße die Wärme und Energie dieses wundervollen Tages.", keywords: ["Glück", "Erfolg", "Lebensfreude"] },
    { id: 32, name: "Der Mond", emoji: "🌙", meaning: "Deine Emotionen und Träume sind heute besonders lebendig. Höre auf die leisen Stimmen deiner Seele – sie haben dir etwas zu sagen.", keywords: ["Emotionen", "Träume", "Seele"] },
    { id: 33, name: "Der Schlüssel", emoji: "🔑", meaning: "Eine Lösung liegt zum Greifen nah! Vertraue darauf, dass sich die richtige Tür zur richtigen Zeit öffnet.", keywords: ["Lösung", "Erkenntnis", "Durchbruch"] },
    { id: 34, name: "Die Fische", emoji: "🐟", meaning: "Fülle und Überfluss umgeben dich. Achte heute auf die Geschenke, die das Universum für dich bereithält – materiell und spirituell.", keywords: ["Fülle", "Reichtum", "Überfluss"] },
    { id: 35, name: "Der Anker", emoji: "⚓", meaning: "Finde Halt in dem, was dir wichtig ist. Der Anker erinnert dich daran, in stürmischen Zeiten deinen Kurs zu halten.", keywords: ["Stabilität", "Beruf", "Beständigkeit"] },
    { id: 36, name: "Das Kreuz", emoji: "✝️", meaning: "Das Schicksal wirkt heute besonders stark. Vertraue auf den größeren Plan – auch wenn du ihn noch nicht ganz erkennen kannst.", keywords: ["Schicksal", "Spiritualität", "Bestimmung"] },
];

export default function DailyCard() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [hasDrawn, setHasDrawn] = useState(false);

    /* Pick a card based on the current date – same card all day, different next day */
    const todaysCard = useMemo(() => {
        const today = new Date();
        const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
        const index = seed % lenormandDeck.length;
        return lenormandDeck[index];
    }, []);

    const handleFlip = () => {
        if (!hasDrawn) {
            setHasDrawn(true);
            setIsFlipped(true);
        } else {
            setIsFlipped(!isFlipped);
        }
    };

    return (
        <div className="flex flex-col items-center gap-10">
            <div
                className="card-flip-container cursor-pointer"
                onClick={handleFlip}
            >
                <div className={`card-flip-inner ${isFlipped ? "flipped" : ""}`}>
                    {/* Front – Card Back */}
                    <div className="card-front flex flex-col items-center justify-center gap-4">
                        <div className="text-6xl animate-float">🔮</div>
                        <p className="font-heading text-xs tracking-[0.3em] uppercase text-mystic-400 font-light text-center px-4">
                            Berühre die Karte
                        </p>
                        <div className="absolute top-4 left-4 right-4 flex justify-between">
                            <span className="text-mystic-500/30 text-lg">✦</span>
                            <span className="text-mystic-500/30 text-lg">✦</span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                            <span className="text-mystic-500/30 text-lg">✦</span>
                            <span className="text-mystic-500/30 text-lg">✦</span>
                        </div>
                    </div>

                    {/* Back – Card Face */}
                    <div className="card-back flex flex-col items-center justify-center gap-3">
                        <span className="text-4xl mb-1">{todaysCard.emoji}</span>
                        <h3 className="font-display text-lg italic tracking-wide">
                            {todaysCard.name}
                        </h3>
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-mystic-400 to-transparent" />
                        <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
                            {todaysCard.meaning}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2 justify-center">
                            {todaysCard.keywords.map((kw) => (
                                <span
                                    key={kw}
                                    className="text-[10px] font-heading tracking-wider uppercase px-2 py-1 rounded-full border border-mystic-500/20 text-mystic-400"
                                >
                                    {kw}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {!hasDrawn && (
                <p className="font-body text-[var(--text-secondary)] text-center italic animate-pulse">
                    Tippe auf die Karte, um deine Tageskarte zu ziehen…
                </p>
            )}
        </div>
    );
}
