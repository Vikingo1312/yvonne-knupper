import ServicePageLayout from "@/components/ServicePageLayout";

export default function SchamanischeReisenPage() {
    return (
        <ServicePageLayout
            title="Schamanische Reisen"
            subtitle="Uraltes Wissen"
            icon="🦅"
            image="/images/schamanische-reisen.jpg"
            description="Schamanische Reisen gehören zu den ältesten Heiltraditionen der Menschheit. Seit Zehntausenden von Jahren nutzen Schamanen auf allen Kontinenten die Reise in die Anderswelt, um Heilung, Führung und Wissen zu erlangen. Ich trage dieses uralte Wissen in die heutige Zeit."
            sections={[
                {
                    heading: "Was ist eine schamanische Reise?",
                    content: "Bei einer schamanischen Reise begebe ich mich in einen veränderten Bewusstseinszustand – einen Zustand zwischen Wachsein und Träumen, der in der Tradition als ‚Anderswelt' bekannt ist. Dort treffe ich auf Krafttiere, Ahnengeister und spirituelle Führungswesen, die Botschaften und Heilung für dich bereithalten. Es ist kein Rollenspiel und keine Fantasie – es ist eine tiefgreifende spirituelle Erfahrung."
                },
                {
                    heading: "Krafttiere und spirituelle Begleiter",
                    content: "Jeder Mensch hat mindestens ein Krafttier – einen spirituellen Begleiter in Tiergestalt, der ihn von Geburt an beschützt. Manchmal verlieren wir den Kontakt zu unserem Krafttier, besonders in Zeiten großer Belastung. Eine schamanische Reise kann diesen Kontakt wiederherstellen und dir helfen, die Botschaften und Qualitäten deines Krafttieres in dein Leben zu integrieren."
                },
                {
                    heading: "Seelenrückholung",
                    content: "Traumatische Erlebnisse können dazu führen, dass Seelenanteile sich abspalten – ein Schutzmechanismus unserer Psyche. Diese verlorenen Anteile können in der schamanischen Reise aufgespürt und liebevoll zurückgeholt werden. Die Seelenrückholung ist eine der kraftvollsten schamanischen Heilmethoden und kann tiefgreifende Veränderungen bewirken."
                }
            ]}
            benefits={[
                "Begegnung mit deinem Krafttier und seinen Botschaften",
                "Seelenrückholung nach traumatischen Erlebnissen",
                "Auflösung von karmischen Verstrickungen",
                "Kontakt zu Ahnen und spirituellen Führungswesen",
                "Reinigung und Stärkung deiner Aura",
                "Tiefe Verbindung mit Mutter Erde und der Natur",
            ]}
            process={[
                "Wir sprechen über dein Anliegen und ich erkläre dir den Ablauf der schamanischen Reise.",
                "Ich begebe mich in den schamanischen Bewusstseinszustand und reise in die Anderswelt – für dich.",
                "Dort treffe ich auf deine Krafttiere, Ahnen und spirituelle Helfer und empfange ihre Botschaften.",
                "Nach der Reise teile ich dir alles mit, was mir gezeigt wurde, und wir integrieren die Heilung gemeinsam.",
            ]}
            cta="Der Adler ruft. Die alten Geister warten darauf, dir ihre Weisheit zu schenken. Bist du bereit für die Reise?"
            price="€ 325"
            priceNote="inkl. MwSt. · inklusive Vor- und Nachgespräch"
        />
    );
}
