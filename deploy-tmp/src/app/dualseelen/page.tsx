import ServicePageLayout from "@/components/ServicePageLayout";

export default function DualseelenPage() {
    return (
        <ServicePageLayout
            title="Dualseelen Coaching"
            subtitle="Seelentiefe Verbindung"
            icon="💫"
            image="/images/dualseelen-new.png"
            description="Die Begegnung mit deiner Dualseele ist eine der intensivsten Erfahrungen, die ein Mensch machen kann. Sie bringt alles an die Oberfläche – die größte Liebe, aber auch die tiefsten Schatten. Ich begleite dich auf diesem transformierenden Weg."
            sections={[
                {
                    heading: "Was ist eine Dualseelenverbindung?",
                    content: "Dualseelen sind zwei Hälften einer ursprünglichen Seele, die sich in dieser Inkarnation wiederfinden. Diese Verbindung ist kein Zufall – sie ist ein kosmischer Plan. Die Begegnung fühlt sich von der ersten Sekunde magisch an: ein tiefes Erkennen, ein Gefühl von ‚nach Hause kommen'. Doch gleichzeitig beginnt ein intensiver Prozess der Spiegelung, der beide Partner an ihre Grenzen bringen kann."
                },
                {
                    heading: "Runner & Chaser – Die Dynamik verstehen",
                    content: "In fast jeder Dualseelenverbindung gibt es Phasen der Trennung. Der eine läuft (Runner), der andere jagt (Chaser). Dieses Muster ist kein Zeichen von Scheitern – es ist ein notwendiger Teil des Heilungsprozesses. Beide Partner müssen ihre eigenen Wunden heilen, bevor die Vereinigung möglich ist. Ich helfe dir, diese Dynamik zu verstehen und aus dem Kreislauf auszusteigen."
                },
                {
                    heading: "Mein Coaching-Ansatz",
                    content: "Ich kombiniere die Weisheit der Lenormand-Karten mit intuitiver Seelenarbeit. In unseren Sitzungen schauen wir auf die energetische Verbindung zwischen euch, erkennen karmische Muster und lösen Blockaden, die der Vereinigung im Weg stehen. Dabei respektiere ich immer den freien Willen beider Seelen – denn echte Liebe kennt keinen Zwang."
                }
            ]}
            benefits={[
                "Klarheit über den Status deiner Dualseelenverbindung",
                "Verstehen der Runner-Chaser-Dynamik",
                "Erkennen und Lösen von karmischen Mustern",
                "Stärkung deiner eigenen Energie und Selbstliebe",
                "Praktische Tipps für den Umgang mit der Trennung",
                "Energetische Unterstützung für die Vereinigung",
            ]}
            process={[
                "Du erzählst mir von deiner Situation: Wann habt ihr euch kennengelernt? Was fühlst du? Was ist gerade die größte Herausforderung?",
                "Ich stimme mich auf die Energie eurer Verbindung ein und lege die Karten für euch beide.",
                "Gemeinsam erkennen wir die Muster, Blockaden und den aktuellen Stand der seelischen Entwicklung.",
                "Ich gebe dir konkrete Schritte und energetische Übungen mit, die dich auf deinem Weg unterstützen.",
            ]}
            cta="Deine Seele hat diese Verbindung nicht zufällig angezogen. Lass uns gemeinsam schauen, was das Universum für euch geplant hat."
        />
    );
}
