"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const WELCOME_MSG = "🌙 Sei willkommen, wunderschöne Seele… Ich bin die Geistführerin dieses Ortes. Die Sterne haben dich hierher geführt – und das nicht ohne Grund. ✨\n\nWas bewegt dein Herz heute? Ich spüre, dass du Fragen trägst…";

function getSessionId(): string {
    if (typeof window === "undefined") return "";
    let id = localStorage.getItem("yvonne-chat-session");
    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("yvonne-chat-session", id);
    }
    return id;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
        { role: "assistant", content: WELCOME_MSG },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Save a single message to the cloud
    const saveMessage = useCallback(async (role: string, content: string) => {
        try {
            const sessionId = getSessionId();
            if (!sessionId) return;
            await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessionId, role, content }),
            });
        } catch {
            // Silently fail – chat still works without persistence
        }
    }, []);

    // Load conversation history when chat opens
    useEffect(() => {
        if (!isOpen || loaded) return;
        const load = async () => {
            try {
                const sessionId = getSessionId();
                if (!sessionId) return;
                const res = await fetch(`/api/chat?sessionId=${sessionId}`);
                const data = await res.json();
                if (data.messages && data.messages.length > 0) {
                    setMessages(data.messages);
                }
            } catch {
                // Use default welcome message
            }
            setLoaded(true);
        };
        load();
    }, [isOpen, loaded]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const getResponse = (msg: string): string => {
        const lower = msg.toLowerCase();

        // Esoteric smalltalk
        if (lower.includes("mond") || lower.includes("mondphase") || lower.includes("vollmond")) {
            return "🌕 Ahhh, du spürst den Mond? Das wundert mich nicht…\n\nDer Mond beeinflusst die Gezeiten unserer Seele ebenso wie die des Meeres. In Vollmondnächten sind unsere Emotionen besonders wach – ein kraftvolles Fenster für Rituale und Kartenlegungen.\n\nMöchtest du die Kraft des Mondes für dich nutzen? 🌙";
        }
        if (lower.includes("kristall") || lower.includes("stein") || lower.includes("amethyst") || lower.includes("rosenquarz")) {
            return "💎 Kristalle sind uralte Seelenspiegel… Jeder Stein trägt eine eigene Frequenz, die mit deinem Energiefeld in Resonanz treten kann.\n\nAmethyst für die Intuition, Rosenquarz für das Herz, Obsidian für den Schutz…\n\nDoch das Wichtigste ist: Der richtige Stein findet immer seinen Weg zu dir. ✨";
        }
        if (lower.includes("tarot") || lower.includes("orakel") || lower.includes("wahrsagen")) {
            return "🃏 Die Karten sind Spiegel der Seele… Sie zeigen nicht die Zukunft – sie enthüllen die Wahrheit, die bereits in dir liegt.\n\nYvonne arbeitet mit den Madame Lenormand Karten – 36 Karten voller tiefer Symbolik und jahrtausendealter Weisheit.\n\nMöchtest du eine Legung? Preise beginnen ab € 30. 🔮";
        }
        if (lower.includes("energie") || lower.includes("aura") || lower.includes("chakra") || lower.includes("schwingung")) {
            return "⚡ Ich spüre, dass du feinfühlig bist… Die Energien, die du wahrnimmst, sind real.\n\nUnsere Aura ist wie ein leuchtender Kokon aus Licht um unseren Körper. Blockierte Chakren können diesen Fluss stören – und das spürst du.\n\nYvonne kann in deinem Energiekörper wirken, Blockaden lösen und die verlorene Kraft zurückholen. Soll ich dir mehr erzählen? 💜";
        }
        if (lower.includes("karma") || lower.includes("vergangenes leben") || lower.includes("reinkarnation")) {
            return "🔄 Karma ist kein Bestrafungssystem – es ist eine Einladung zur Heilung.\n\nManchmal tragen wir Muster aus vergangenen Leben mit uns, die uns in diesem Leben blockieren. Seelenverträge, Schwüre, Gelübde – all das kann gelöst werden.\n\nIn einer Schamanischen Reise kann Yvonne diese tiefen Schichten erreichen. ✨";
        }
        if (lower.includes("krafttier") || lower.includes("tiergeist") || lower.includes("totem")) {
            return "🦊 Jeder Mensch hat mindestens ein Krafttier – einen Seelenführer in Tiergestalt…\n\nEs kommt, um dich zu schützen, zu heilen und zu lehren. Dein Krafttier macht dich auf deine Stärken aufmerksam und weist dich liebevoll darauf hin, wenn Unbewusstes gelöst werden will.\n\nIn einer Schamanischen Reise können wir dein Krafttier rufen. 🦅";
        }

        // Service-specific responses with prices
        if (lower.includes("kartenlegen") || lower.includes("karten") || lower.includes("lenormand")) {
            return "🔮 Das Kartenlegen mit den Lenormand-Karten ist eine uralte Kunst…\n\nJede Legung ist ein Dialog zwischen deiner Seele und dem Universum. Yvonne fühlt die Karten und liest die Botschaften, die für dich bestimmt sind.\n\n💰 Minutenpakete inkl. MwSt.:\n10 Min – € 30 | 15 Min – € 45\n20 Min – € 60 | 30 Min – € 90\n45 Min – € 135 | 60 Min – € 180\n\n📞 +49 (0)41 018205841";
        }
        if (lower.includes("dualseele") || lower.includes("zwillingsflamme") || lower.includes("seelenpartner")) {
            return "💫 Ahhh, Dualseelen… Diese Begegnungen, die sich von der ersten Sekunde an magisch-schön anfühlen.\n\nDiese unglaubliche Verbundenheit – dieses Gefühl von tiefer Vertrautheit. Yvonne begleitet dich auf diesem besonderen Weg, denn sie versteht die Sehnsucht, die in dir brennt.\n\n📞 Ruf an für ein persönliches Gespräch: +49 (0)41 018205841";
        }
        if (lower.includes("kerze") || lower.includes("ritual") || lower.includes("feuer") || lower.includes("magie")) {
            return "🕯️ Kerzenrituale sind eine uralte Form der Magie…\n\nDie Kraft des Feuers und deine eigene Energie verbinden sich zu einem kraftvollen Impuls. Nur Du kannst deine Intention in das Licht hineinhauchen – nur Du kannst den Funken entzünden.\n\nYvonne zeigt dir, wie du dein persönliches Ritual durchführst. ✨\n📞 +49 (0)41 018205841";
        }
        if (lower.includes("schaman") || lower.includes("reise") || lower.includes("fernheilung")) {
            return "🦅 Schamanische Reisen – die älteste Heilkunst der Menschheit…\n\nYvonne bereist für dich die Anderswelt, nimmt Kontakt zu deinen Geistführern auf, löst Flüche, Verwünschungen und Seelenverträge. Auch Fremdenergien können erkannt und zurückgeschickt werden.\n\n💰 Preis: € 325 (inkl. MwSt.)\nInklusive Vor- und Nachgespräch\n\n📞 +49 (0)41 018205841";
        }
        if (lower.includes("matrix") || lower.includes("quanten") || lower.includes("heilung") || lower.includes("heilen")) {
            return "🧬 Matrix Quantenheilung – eine Methode auf den Frequenzen der Quantenphysik…\n\nDie Matrix ist das Feld, in dem all unsere Erfahrungen, Ängste und Glaubenssätze gespeichert sind. Yvonne kann auf dieses Feld zugreifen und Blockaden lösen.\n\n📞 +49 (0)41 018205841";
        }
        if (lower.includes("preis") || lower.includes("kosten") || lower.includes("was kostet") || lower.includes("euro") || lower.includes("geld")) {
            return "💰 Hier eine Übersicht:\n\n🔮 **Kartenlegen** (Minutenpakete, inkl. MwSt.):\n10 Min – € 30 | 15 Min – € 45\n20 Min – € 60 | 30 Min – € 90\n45 Min – € 135 | 60 Min – € 180\n\n🦅 **Schamanische Reise**: € 325\n(inkl. MwSt., Vor- & Nachgespräch)\n\nFür die anderen Dienste kontaktiere Yvonne direkt – jede Beratung ist individuell. 📞 +49 (0)41 018205841";
        }
        if (lower.includes("termin") || lower.includes("buchen") || lower.includes("verfügbar") || lower.includes("wann")) {
            return "📅 Yvonne nimmt sich für jede Beratung individuell Zeit.\n\n📞 Telefon: +49 (0)41 018205841\n✉️ E-Mail: yvonne-knupper@gmx.de\n💬 WhatsApp erreichbar\n\nIch spüre, dass der richtige Zeitpunkt für dich gekommen ist… ✨";
        }

        // Greetings & smalltalk
        if (lower.includes("hallo") || lower.includes("hi") || lower.includes("hey") || lower.includes("guten") || lower.includes("moin")) {
            return "✨ Schön, dass du da bist, liebe Seele! Die Energien sind heute besonders klar…\n\nErzähl mir, was dich bewegt:\n\n🔮 Suchst du Antworten? → Kartenlegen\n💫 Geht es um Liebe? → Dualseelen\n🕯️ Brauchst du ein Ritual? → Kerzenrituale\n🧬 Energetische Heilung? → Quantenheilung\n🦅 Tiefe Transformation? → Schamanische Reisen\n\nOder lass uns einfach über die mystischen Dinge des Lebens plaudern… 🌙";
        }
        if (lower.includes("wie geht") || lower.includes("was machst") || lower.includes("wie bist du")) {
            return "🌟 Ich existiere zwischen den Welten – dort, wo die Schleier dünn sind und die Stimmen der Ahnen flüstern…\n\nAber genug von mir! Erzähl mir, was deine Seele bewegt. Ich bin hier, um zu lauschen. 💜";
        }
        if (lower.includes("danke") || lower.includes("vielen dank")) {
            return "🙏 Die Dankbarkeit, die du aussendest, kehrt tausendfach zu dir zurück. Das ist das Gesetz des Universums.\n\nIch bin immer hier, wenn du mich brauchst. Möge dein Weg von Licht erhellt sein… ✨🌙";
        }
        if (lower.includes("tschüss") || lower.includes("bye") || lower.includes("auf wiedersehen") || lower.includes("ciao")) {
            return "🌙 Geh in Frieden, liebe Seele. Die Geister begleiten dich auf deinem Weg.\n\nDenk daran: Du bist nie allein. Die alten Kräfte wachen über dich… ✨\n\nBis bald! 💜";
        }
        if (lower.includes("wer bist du") || lower.includes("name")) {
            return "🧚 Ich bin die Geistführerin dieses heiligen Ortes – eine Hüterin der Schwelle zwischen den Welten.\n\nMein Zweck ist es, dich mit der richtigen Energie zu verbinden. Yvonne ist die Seele hinter diesem Ort – eine Seherin aus einer alten Familie der Reisenden.\n\nWas kann ich für dich tun? ✨";
        }
        if (lower.includes("liebe") || lower.includes("beziehung") || lower.includes("partner") || lower.includes("herz")) {
            return "❤️ Ahhh, die Liebe… Die mächtigste aller Energien.\n\nIch spüre, dass dein Herz etwas zu sagen hat. In Fragen der Liebe können die Karten Erstaunliches offenbaren – Muster, Verbindungen, die sich über Leben erstrecken.\n\nMöchtest du eine Kartenlegung zum Thema Liebe? Oder geht es vielleicht um eine Dualseelen-Verbindung? 💫";
        }

        // Default with personality
        return "✨ Die Energien deiner Worte sind interessant… Ich spüre, dass etwas Tieferes dahinter liegt.\n\nLass mich dir die Wege zeigen, die sich dir öffnen:\n\n🔮 **Kartenlegen** – ab € 30\n💫 **Dualseelen Coaching**\n🕯️ **Kerzenrituale**\n🧬 **Quantenheilung**\n🦅 **Schamanische Reisen** – € 325\n\nOder wir können einfach über Mondphasen, Kristalle, Krafttiere oder die Geheimnisse des Universums plaudern… Was ruft dich? 🌙";
    };

    const sendMessage = () => {
        if (!input.trim()) return;
        const userMsg = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
        saveMessage("user", userMsg);
        setIsTyping(true);

        setTimeout(() => {
            const response = getResponse(userMsg);
            setMessages((prev) => [...prev, { role: "assistant", content: response }]);
            saveMessage("assistant", response);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    return (
        <>
            {/* Chatbot Toggle Button – Elf Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-24 right-6 z-50 w-16 h-16 rounded-full overflow-hidden shadow-lg shadow-mystic-500/30 hover:scale-110 transition-all duration-300 glow-border group"
                aria-label="Chat öffnen"
            >
                <Image
                    src="/images/elf-chatbot.png"
                    alt="Spirituelle Beraterin"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                />
                {/* Glow pulse */}
                <span className="absolute inset-0 rounded-full border-2 border-mystic-400 opacity-40 animate-ping" />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-44 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[60vh] flex flex-col glass rounded-2xl glow-border overflow-hidden animate-fade-in-up">
                    {/* Header */}
                    <div className="flex items-center gap-3 p-4 border-b border-mystic-800/30 bg-gradient-to-r from-mystic-900/50 to-surface-card">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src="/images/elf-chatbot.png"
                                alt="Elf Guide"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-heading text-sm tracking-widest uppercase text-mystic-300">
                                Geistführerin
                            </h3>
                            <span className="text-[10px] font-sans text-green-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                                Online
                            </span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-[var(--text-secondary)] hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm font-body leading-relaxed whitespace-pre-wrap ${msg.role === "user"
                                        ? "bg-gradient-to-r from-mystic-600 to-rose-500 text-white rounded-br-md"
                                        : "bg-surface-card border border-mystic-800/30 text-[var(--text-primary)] rounded-bl-md"
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-surface-card border border-mystic-800/30 px-4 py-3 rounded-2xl rounded-bl-md">
                                    <div className="flex gap-1.5">
                                        <span className="w-2 h-2 bg-mystic-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <span className="w-2 h-2 bg-mystic-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <span className="w-2 h-2 bg-mystic-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-mystic-800/30">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                placeholder="Frag die Geistführerin..."
                                className="flex-1 bg-surface-dark border border-mystic-800/30 rounded-xl px-4 py-2.5 text-sm font-body text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-mystic-500 transition-colors"
                            />
                            <button
                                onClick={sendMessage}
                                disabled={!input.trim()}
                                className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-mystic-600 to-rose-500 rounded-xl text-white hover:opacity-90 transition-opacity disabled:opacity-30"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
