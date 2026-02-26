"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const WELCOME_MSG = "🌙 Sei willkommen, wunderschöne Seele… Ich bin die Geistführerin dieses Ortes. Die Sterne haben Dich hierher geführt – und das nicht ohne Grund. ✨\n\nWas bewegt Dein Herz heute? Ich spüre, dass Du Fragen trägst…";

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
    const [showContactForm, setShowContactForm] = useState(false);
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactSent, setContactSent] = useState(false);
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

    // Save lead/inquiry to the admin panel
    const saveLead = useCallback(async (name: string, email: string, phone: string, interest: string, messageText: string) => {
        try {
            await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name || "Chatbot-Anfrage",
                    email: email || "",
                    phone: phone || "",
                    interest: interest || "Chatbot",
                    message: messageText,
                }),
            });
        } catch {
            // Silently fail
        }
    }, []);

    const getResponse = (msg: string): { text: string; isDefault: boolean } => {
        const lower = msg.toLowerCase();

        // Esoteric smalltalk
        if (lower.includes("mond") || lower.includes("mondphase") || lower.includes("vollmond")) {
            return { text: "🌕 Ahhh, Du spürst den Mond? Das wundert mich nicht…\n\nDer Mond beeinflusst die Gezeiten unserer Seele ebenso wie die des Meeres. In Vollmondnächten sind unsere Emotionen besonders wach – ein kraftvolles Fenster für Rituale und Kartenlegungen.\n\nMöchtest Du die Kraft des Mondes für Dich nutzen? 🌙", isDefault: false };
        }
        if (lower.includes("kristall") || lower.includes("stein") || lower.includes("amethyst") || lower.includes("rosenquarz")) {
            return { text: "💎 Kristalle sind uralte Seelenspiegel… Jeder Stein trägt eine eigene Frequenz, die mit Deinem Energiefeld in Resonanz treten kann.\n\nAmethyst für die Intuition, Rosenquarz für das Herz, Obsidian für den Schutz…\n\nDoch das Wichtigste ist: Der richtige Stein findet immer seinen Weg zu Dir. ✨", isDefault: false };
        }
        if (lower.includes("tarot") || lower.includes("orakel") || lower.includes("wahrsagen")) {
            return { text: "🃏 Die Karten sind Spiegel der Seele… Sie zeigen nicht die Zukunft – sie enthüllen die Wahrheit, die bereits in Dir liegt.\n\nYvonne arbeitet mit den Madame Lenormand Karten – 36 Karten voller tiefer Symbolik und jahrtausendealter Weisheit.\n\nMöchtest Du eine Legung? Preise beginnen ab € 30. 🔮", isDefault: false };
        }
        if (lower.includes("energie") || lower.includes("aura") || lower.includes("chakra") || lower.includes("schwingung")) {
            return { text: "⚡ Ich spüre, dass Du feinfühlig bist… Die Energien, die Du wahrnimmst, sind real.\n\nUnsere Aura ist wie ein leuchtender Kokon aus Licht um unseren Körper. Blockierte Chakren können diesen Fluss stören – und das spürst Du.\n\nYvonne kann in Deinem Energiekörper wirken, Blockaden lösen und die verlorene Kraft zurückholen. Soll ich Dir mehr erzählen? 💜", isDefault: false };
        }
        if (lower.includes("karma") || lower.includes("vergangenes leben") || lower.includes("reinkarnation")) {
            return { text: "🔄 Karma ist kein Bestrafungssystem – es ist eine Einladung zur Heilung.\n\nManchmal tragen wir Muster aus vergangenen Leben mit uns, die uns in diesem Leben blockieren. Seelenverträge, Schwüre, Gelübde – all das kann gelöst werden.\n\nIn einer Schamanischen Reise kann Yvonne diese tiefen Schichten erreichen. ✨", isDefault: false };
        }
        if (lower.includes("krafttier") || lower.includes("tiergeist") || lower.includes("totem")) {
            return { text: "🦊 Jeder Mensch hat mindestens ein Krafttier – einen Seelenführer in Tiergestalt…\n\nEs kommt, um Dich zu schützen, zu heilen und zu lehren. Dein Krafttier macht Dich auf Deine Stärken aufmerksam.\n\nIn einer Schamanischen Reise können wir Dein Krafttier rufen. 🦅", isDefault: false };
        }

        // Service-specific responses with prices
        if (lower.includes("kartenlegen") || lower.includes("karten") || lower.includes("lenormand")) {
            return { text: "🔮 Das Kartenlegen mit den Lenormand-Karten ist eine uralte Kunst…\n\nJede Legung ist ein Dialog zwischen Deiner Seele und dem Universum.\n\n💰 Minutenpakete inkl. MwSt.:\n10 Min – € 30 | 15 Min – € 45\n20 Min – € 60 | 30 Min – € 90\n45 Min – € 135 | 60 Min – € 180\n\n📞 +49 (0)41 018205841", isDefault: false };
        }
        if (lower.includes("dualseele") || lower.includes("zwillingsflamme") || lower.includes("seelenpartner")) {
            return { text: "💫 Ahhh, Dualseelen… Diese Begegnungen, die sich von der ersten Sekunde an magisch-schön anfühlen.\n\nYvonne begleitet Dich auf diesem besonderen Weg, denn sie versteht die Sehnsucht, die in Dir brennt.\n\n📞 Ruf an: +49 (0)41 018205841", isDefault: false };
        }
        if (lower.includes("kerze") || lower.includes("ritual") || lower.includes("feuer") || lower.includes("magie")) {
            return { text: "🕯️ Kerzenrituale sind eine uralte Form der Magie…\n\nDie Kraft des Feuers und Deine eigene Energie verbinden sich zu einem kraftvollen Impuls.\n\nYvonne zeigt Dir, wie Du Dein persönliches Ritual durchführst. ✨\n📞 +49 (0)41 018205841", isDefault: false };
        }
        if (lower.includes("schaman") || lower.includes("reise") || lower.includes("fernheilung")) {
            return { text: "🦅 Schamanische Reisen – die älteste Heilkunst der Menschheit…\n\nYvonne bereist für Dich die Anderswelt, löst Flüche, Verwünschungen und Seelenverträge.\n\n💰 Preis: € 325 (inkl. MwSt.)\nInklusive Vor- und Nachgespräch\n\n📞 +49 (0)41 018205841", isDefault: false };
        }
        if (lower.includes("matrix") || lower.includes("quanten") || lower.includes("heilung") || lower.includes("heilen")) {
            return { text: "🧬 Matrix Quantenheilung – eine Methode auf den Frequenzen der Quantenphysik…\n\nDie Matrix ist das Feld, in dem all unsere Erfahrungen gespeichert sind. Yvonne kann Blockaden lösen.\n\n📞 +49 (0)41 018205841", isDefault: false };
        }
        if (lower.includes("preis") || lower.includes("kosten") || lower.includes("was kostet") || lower.includes("euro") || lower.includes("geld")) {
            return { text: "💰 Hier eine Übersicht:\n\n🔮 Kartenlegen (Minutenpakete, inkl. MwSt.):\n10 Min – € 30 | 15 Min – € 45\n20 Min – € 60 | 30 Min – € 90\n45 Min – € 135 | 60 Min – € 180\n\n🦅 Schamanische Reise: € 325\n(inkl. MwSt., Vor- & Nachgespräch)\n\n📞 +49 (0)41 018205841", isDefault: false };
        }
        if (lower.includes("termin") || lower.includes("buchen") || lower.includes("verfügbar") || lower.includes("wann")) {
            return { text: "📅 Yvonne nimmt sich für jede Beratung individuell Zeit.\n\n📞 Telefon: +49 (0)41 018205841\n✉️ E-Mail: yvonne-knupper@gmx.de\n💬 WhatsApp erreichbar\n\nIch spüre, dass der richtige Zeitpunkt für Dich gekommen ist… ✨", isDefault: false };
        }

        // Greetings & smalltalk
        if (lower.includes("hallo") || lower.includes("hi") || lower.includes("hey") || lower.includes("guten") || lower.includes("moin")) {
            return { text: "✨ Schön, dass Du da bist, liebe Seele! Die Energien sind heute besonders klar…\n\nErzähl mir, was Dich bewegt:\n\n🔮 Kartenlegen\n💫 Dualseelen Coaching\n🕯️ Kerzenrituale\n🧬 Quantenheilung\n🦅 Schamanische Reisen\n\nOder lass uns einfach plaudern… 🌙", isDefault: false };
        }
        if (lower.includes("wie geht") || lower.includes("was machst") || lower.includes("wie bist du")) {
            return { text: "🌟 Ich existiere zwischen den Welten – dort, wo die Schleier dünn sind…\n\nAber genug von mir! Erzähl mir, was Deine Seele bewegt. Ich bin hier, um zu lauschen. 💜", isDefault: false };
        }
        if (lower.includes("danke") || lower.includes("vielen dank")) {
            return { text: "🙏 Die Dankbarkeit, die Du aussendest, kehrt tausendfach zu Dir zurück.\n\nIch bin immer hier, wenn Du mich brauchst. ✨🌙", isDefault: false };
        }
        if (lower.includes("tschüss") || lower.includes("bye") || lower.includes("auf wiedersehen") || lower.includes("ciao")) {
            return { text: "🌙 Geh in Frieden, liebe Seele. Die Geister begleiten Dich.\n\nDenk daran: Du bist nie allein. Die alten Kräfte wachen über Dich… ✨\n\nBis bald! 💜", isDefault: false };
        }
        if (lower.includes("wer bist du") || lower.includes("name")) {
            return { text: "🧚 Ich bin die Geistführerin dieses heiligen Ortes. Yvonne ist die Seele hinter diesem Ort – eine Seherin aus einer alten Familie der Reisenden.\n\nWas kann ich für Dich tun? ✨", isDefault: false };
        }
        if (lower.includes("liebe") || lower.includes("beziehung") || lower.includes("partner") || lower.includes("herz")) {
            return { text: "❤️ Ahhh, die Liebe… Die mächtigste aller Energien.\n\nIn Fragen der Liebe können die Karten Erstaunliches offenbaren – Muster, die sich über Leben erstrecken.\n\nMöchtest Du eine Kartenlegung zum Thema Liebe? Oder eine Dualseelen-Beratung? 💫", isDefault: false };
        }
        if (lower.includes("angst") || lower.includes("sorge") || lower.includes("traurig") || lower.includes("hilfe") || lower.includes("problem")) {
            return { text: "💜 Ich spüre, dass Du gerade eine schwere Last trägst, liebe Seele…\n\nDu bist nicht allein. Yvonne kann Dir helfen, Klarheit zu finden und Blockaden zu lösen.\n\nMöchtest Du, dass ich Deine Kontaktdaten an Yvonne weiterleite? Sie wird sich persönlich bei Dir melden. 🌙\n\n👇 Klicke auf 'Anfrage senden' unten!", isDefault: true };
        }

        // DEFAULT: Proactively offer to create contact
        return {
            text: "✨ Das ist eine wundervolle Frage, liebe Seele! Dafür brauchen wir Yvonnes persönliche Expertise.\n\n🤗 Ich kann gerne für Dich den Kontakt herstellen! Gib mir einfach Deine Daten und Yvonne wird sich persönlich bei Dir zurückmelden.\n\n👇 Trag Dich unten ein – ich leite alles direkt weiter!",
            isDefault: true
        };
    };

    const sendMessage = () => {
        if (!input.trim()) return;
        const userMsg = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
        saveMessage("user", userMsg);
        setIsTyping(true);

        setTimeout(() => {
            const { text, isDefault } = getResponse(userMsg);
            setMessages((prev) => [...prev, { role: "assistant", content: text }]);
            saveMessage("assistant", text);
            setIsTyping(false);

            // Show contact form for default/unknown responses
            if (isDefault) {
                setShowContactForm(true);
            }
        }, 1000 + Math.random() * 1000);
    };

    const handleContactSubmit = async () => {
        if (!contactName.trim()) return;

        // Collect last few messages as context
        const lastMsgs = messages.slice(-4).map(m => `${m.role === "user" ? "Besucher" : "Bot"}: ${m.content}`).join("\n");

        await saveLead(contactName, contactEmail, contactPhone, "Chatbot-Anfrage", lastMsgs);

        setContactSent(true);
        setMessages((prev) => [...prev, {
            role: "assistant",
            content: "🙏 Vielen Dank, liebe Seele! Deine Anfrage wurde an Yvonne weitergeleitet. Sie wird sich so schnell wie möglich bei Dir melden. ✨🌙"
        }]);
        saveMessage("assistant", "Kontaktdaten hinterlassen – Anfrage weitergeleitet.");

        setTimeout(() => {
            setShowContactForm(false);
            setContactSent(false);
            setContactName("");
            setContactEmail("");
            setContactPhone("");
        }, 2000);
    };

    return (
        <>
            {/* Chatbot Toggle Button – well above WhatsApp */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-[120px] right-6 z-50 w-14 h-14 rounded-full overflow-hidden shadow-lg shadow-mystic-500/30 hover:scale-110 transition-all duration-300"
                aria-label={isOpen ? "Chat schließen" : "Chat öffnen"}
            >
                {isOpen ? (
                    <div className="w-full h-full bg-gradient-to-br from-mystic-600 to-rose-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                ) : (
                    <Image
                        src="/images/elf-logo-v3.png"
                        alt="Spirituelle Beraterin"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                    />
                )}
                {/* Smooth glow pulse when closed – matches WhatsApp style */}
                {!isOpen && <span className="absolute inset-0 rounded-full border-2 border-mystic-400/50 animate-[pulse-glow_4s_ease-in-out_infinite]" />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-[190px] right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[480px] max-h-[50vh] flex flex-col glass rounded-2xl glow-border overflow-hidden animate-fade-in-up">
                    {/* Header */}
                    <div className="flex items-center gap-3 p-4 border-b border-mystic-800/30 bg-gradient-to-r from-mystic-900/50 to-surface-card">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src="/images/elf-logo-v3.png"
                                alt="Yvonne"
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

                    {/* Contact Form (appears when bot can't answer) */}
                    {showContactForm && !contactSent && (
                        <div className="p-3 border-t border-mystic-800/30 bg-mystic-900/30 space-y-2">
                            <p className="text-xs text-mystic-400 font-heading tracking-wider uppercase text-center">📝 Anfrage an Yvonne</p>
                            <input
                                type="text"
                                value={contactName}
                                onChange={(e) => setContactName(e.target.value)}
                                placeholder="Dein Name *"
                                className="w-full bg-surface-dark border border-mystic-800/30 rounded-lg px-3 py-2 text-sm text-white placeholder:text-mystic-600 focus:outline-none focus:border-mystic-500"
                            />
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                    placeholder="E-Mail"
                                    className="flex-1 bg-surface-dark border border-mystic-800/30 rounded-lg px-3 py-2 text-sm text-white placeholder:text-mystic-600 focus:outline-none focus:border-mystic-500"
                                />
                                <input
                                    type="tel"
                                    value={contactPhone}
                                    onChange={(e) => setContactPhone(e.target.value)}
                                    placeholder="Telefon"
                                    className="flex-1 bg-surface-dark border border-mystic-800/30 rounded-lg px-3 py-2 text-sm text-white placeholder:text-mystic-600 focus:outline-none focus:border-mystic-500"
                                />
                            </div>
                            <button
                                onClick={handleContactSubmit}
                                disabled={!contactName.trim()}
                                className="w-full py-2 bg-gradient-to-r from-mystic-600 to-rose-500 rounded-lg text-white text-sm font-heading tracking-wider uppercase hover:opacity-90 disabled:opacity-30 transition-all"
                            >
                                📬 Anfrage senden
                            </button>
                        </div>
                    )}

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
