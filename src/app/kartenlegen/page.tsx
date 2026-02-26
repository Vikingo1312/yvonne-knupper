import ServicePageLayout from "@/components/ServicePageLayout";

export default function KartenlegenPage() {
    return (
        <ServicePageLayout
            title="Kartenlegen"
            subtitle="Madame Lenormand"
            icon="🔮"
            image="/images/karten-new.png"
            description="Das Kartenlegen mit den Lenormand-Karten ist eine uralte Kunst, die Vergangenheit, Gegenwart und Zukunft miteinander verwebt. Seit meiner Kindheit begleiten mich die Karten – sie sind ein Spiegel der Seele und öffnen Türen zu den verborgenen Wahrheiten Deines Lebens."
            sections={[
                {
                    heading: "Die Magie der Lenormand-Karten",
                    content: "Marie-Anne Lenormand war die berühmteste Kartenlegerin Europas. Ihre 36 Karten bilden ein fein abgestimmtes System, das tiefe Einblicke in alle Lebensbereiche ermöglicht. Jede Karte trägt eine eigene Energie, eine eigene Botschaft – und in der Kombination entfalten sie ihre volle Kraft. Ich lese die Karten nicht nur – ich fühle sie. Jede Legung ist ein Dialog zwischen Deiner Seele und dem Universum."
                },
                {
                    heading: "Wie ich für Dich lege",
                    content: "Meine Beratungen finden telefonisch statt, damit Du Dich in Deiner vertrauten Umgebung entspannen kannst. Ich benötige nur Deinen Vornamen und Dein Geburtsdatum, um mich auf Deine Energie einzustimmen. Dann lege ich die Karten und lasse mich von den Bildern, Symbolen und Energien leiten. Ich sage Dir ehrlich, was die Karten zeigen – mit Einfühlungsvermögen und Respekt vor Deinem freien Willen."
                },
                {
                    heading: "Themen, bei denen die Karten helfen",
                    content: "Liebe und Partnerschaft, berufliche Veränderungen, familiäre Konflikte, Entscheidungshilfe bei wichtigen Lebensfragen, Seelenverbindungen und Dualseelen, persönliches Wachstum und spirituelle Entwicklung – die Karten kennen keine Grenzen. Sie zeigen Dir den Weg, den Du bereits in Dir trägst."
                }
            ]}
            benefits={[
                "Tiefe Einblicke in Deine aktuelle Lebenssituation",
                "Klarheit bei wichtigen Entscheidungen",
                "Erkennen von verborgenen Mustern und Blockaden",
                "Zeitliche Tendenzen für die nahe Zukunft",
                "Verständnis für Beziehungsdynamiken",
                "Neue Perspektiven auf scheinbar festgefahrene Situationen",
            ]}
            process={[
                "Du rufst mich an oder schreibst mir per WhatsApp. Wir vereinbaren einen Termin, der für Dich passt.",
                "Zur vereinbarten Zeit stimme ich mich auf Deine Energie ein. Teile mir Deinen Vornamen und Dein Geburtsdatum mit.",
                "Ich lege die Karten und beschreibe Dir, was ich sehe und fühle. Dabei gehe ich auf Deine spezifischen Fragen ein.",
                "Gemeinsam besprechen wir die Botschaften der Karten und ich gebe Dir praktische Impulse für Deinen Weg.",
            ]}
            cta="Bist Du bereit, einen Blick hinter den Schleier zu werfen? Die Karten warten auf Dich."
            price="€ 30 – € 180"
            priceNote="Minutenpakete inkl. MwSt. · 10 Min € 30 · 15 Min € 45 · 20 Min € 60 · 25 Min € 75 · 30 Min € 90 · 40 Min € 120 · 45 Min € 135 · 50 Min € 150 · 60 Min € 180"
        />
    );
}
