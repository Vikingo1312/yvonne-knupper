import ServicePageLayout from "@/components/ServicePageLayout";

export default function QuantenheilungPage() {
    return (
        <ServicePageLayout
            title="Matrix Quantenheilung"
            subtitle="Frequenzen der Heilung"
            icon="🧬"
            image="/images/matrix.jpg"
            description="Die Matrix Quantenheilung verbindet die Erkenntnisse der modernen Quantenphysik mit uraltem Heilwissen. Auf der Ebene der Quanten sind wir alle miteinander verbunden – und genau dort setze ich an, um Blockaden zu lösen und deine Selbstheilungskräfte zu aktivieren."
            sections={[
                {
                    heading: "Was ist Quantenheilung?",
                    content: "Die Quantenheilung basiert auf der Erkenntnis, dass alles im Universum aus Energie und Information besteht. Jede Zelle deines Körpers schwingt auf einer bestimmten Frequenz. Wenn diese Frequenz gestört ist – durch Trauma, Stress, negative Glaubenssätze oder karmische Belastungen – entstehen Blockaden, die sich als körperliche Beschwerden, emotionale Probleme oder Lebenskrisen äußern können."
                },
                {
                    heading: "Die Zwei-Punkt-Methode",
                    content: "Im Kern der Quantenheilung steht die Zwei-Punkt-Methode. Dabei verbinde ich zwei Punkte auf deinem Energiefeld und bringe sie in Resonanz mit der reinen Quelle – dem Nullpunktfeld, dem Raum unendlicher Möglichkeiten. In diesem Moment kann eine sofortige Transformation geschehen. Alte Muster lösen sich auf, der Körper beginnt sich selbst zu heilen, und neue Möglichkeiten eröffnen sich."
                },
                {
                    heading: "Fernheilung über Raum und Zeit",
                    content: "Da die Quantenheilung auf der energetischen Ebene arbeitet, ist eine Fernbehandlung genauso wirksam wie eine persönliche Sitzung. Quantenverschränkung – ein nachgewiesenes physikalisches Phänomen – zeigt uns, dass verbundene Teilchen über jede Entfernung hinweg kommunizieren. Genau diese Verbindung stelle ich her, wenn ich für dich arbeite."
                }
            ]}
            benefits={[
                "Aktivierung deiner körpereigenen Selbstheilungskräfte",
                "Auflösung von tief sitzenden emotionalen Blockaden",
                "Transformation negativer Glaubenssätze und Verhaltensmuster",
                "Harmonisierung des Energiekörpers",
                "Unterstützung bei chronischen Beschwerden",
                "Zugang zu deinem vollen Potenzial",
            ]}
            process={[
                "Wir besprechen dein Anliegen und ich stimme mich auf dein Energiefeld ein – auch aus der Ferne.",
                "Ich verbinde mich mit der reinen Quelle und beginne die Behandlung mit der Zwei-Punkt-Methode.",
                "Während der Sitzung lösen sich Blockaden auf und neue, harmonische Frequenzen werden installiert.",
                "Im Anschluss besprechen wir die Erfahrungen und ich gebe dir Übungen für die Integration mit.",
            ]}
            cta="In dir schlummert die Kraft der Selbstheilung. Lass uns gemeinsam die Frequenz finden, auf der dein höchstes Potenzial schwingt."
        />
    );
}
