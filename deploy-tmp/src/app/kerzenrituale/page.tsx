import ServicePageLayout from "@/components/ServicePageLayout";

export default function KerzenritualePage() {
    return (
        <ServicePageLayout
            title="Kerzenrituale"
            subtitle="Die Kraft des Feuers"
            icon="🕯️"
            image="/images/kerzenrituale.jpg"
            description="Das Kerzenritual ist eine der ältesten und kraftvollsten Formen der Magie. Seit Jahrtausenden nutzen Menschen die Flamme als Brücke zwischen der sichtbaren und der unsichtbaren Welt. In jedem Feuer wohnt die Kraft der Transformation – und genau diese Kraft nutze ich für dich."
            sections={[
                {
                    heading: "Die uralte Magie des Feuers",
                    content: "Feuer ist das Element der Reinigung, der Wandlung und der Manifestation. Wenn wir eine Kerze entzünden, öffnen wir ein Portal zwischen den Welten. Die Flamme trägt unsere Wünsche, Gebete und Intentionen ins Universum. Dabei ist das Ritual weit mehr als nur eine Kerze anzuzünden – es ist ein heiliger Akt, bei dem deine Energie, deine Worte und deine Ausrichtung zusammenfließen."
                },
                {
                    heading: "Wie ich die Rituale durchführe",
                    content: "Jedes Kerzenritual wird individuell für dich und dein Anliegen gestaltet. Ich wähle die passende Kerzenfarbe, das richtige Öl und die entsprechenden Kräuter aus. Während des Rituals spreche ich Gebete und Affirmationen, die auf deine Situation abgestimmt sind. Die Flamme wird zum Träger deiner Intention – und das Universum antwortet."
                },
                {
                    heading: "Wofür Kerzenrituale wirken",
                    content: "Liebeszauber und Partnerrückführung, Schutzrituale gegen negative Energien, Reinigung von Räumen und Auren, Wohlstand und beruflicher Erfolg, Loslassen von Altem und Manifestation von Neuem, Stärkung der inneren Kraft und des Selbstvertrauens. Die Möglichkeiten sind so vielfältig wie das Leben selbst."
                }
            ]}
            benefits={[
                "Individuell auf dein Anliegen abgestimmte Rituale",
                "Kraftvolle energetische Unterstützung für deine Ziele",
                "Lösung von energetischen Blockaden und Fremdenergien",
                "Schutz für dich und deine Liebsten",
                "Unterstützung bei Liebesthemen und Partnerschaft",
                "Manifestation deiner tiefsten Wünsche",
            ]}
            process={[
                "Wir sprechen über dein Anliegen und ich stimme mich auf deine Situation ein.",
                "Ich wähle die passenden Materialien – Kerzenfarbe, Öl, Kräuter – individuell für dich aus.",
                "Das Ritual wird an einem energetisch günstigen Zeitpunkt durchgeführt, abgestimmt auf die Mondphasen.",
                "Nach dem Ritual teile ich dir die Botschaften mit, die mir während der Zeremonie übermittelt wurden.",
            ]}
            cta="Die Flamme wartet darauf, deine Wünsche ins Universum zu tragen. Lass uns gemeinsam die Kraft des Feuers nutzen."
        />
    );
}
