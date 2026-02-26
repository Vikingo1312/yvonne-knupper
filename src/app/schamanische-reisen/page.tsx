import ServicePageLayout from "@/components/ServicePageLayout";

export default function SchamanischeReisenPage() {
    return (
        <ServicePageLayout
            title="Schamanische Reisen"
            subtitle="Uraltes Wissen"
            icon="🦅"
            image="/images/schamanische-reisen.jpg"
            description="Jede Schamanische Reise ist wahrhaftig individuell und sehr transformierend. Ich begebe mich für Dich auf diese Reise, um wieder mehr Kraft, Leichtigkeit, Zufriedenheit und Gelassenheit in Dein Leben zu bringen und um tief Verborgenes ins Licht zu bringen. Ich freue mich, wenn Du mir die Erlaubnis dazu gibst."
            sections={[
                {
                    heading: "Spirituelle Fernheilung durch eine Schamanische Reise",
                    content: "Der Schamanismus ist eine der ältesten spirituellen Praktiken der Menschheitsgeschichte, welche weltweit verbreitet ist. Schamanen und Medizinfrauen & -männer waren die Bewahrer des traditionellen Wissens und als Heiler tief verbunden mit Mutter Erde und der Natur. Sie hatten Zugang in die \u201eAnderswelt\u201c oder auch \u201eUnterwelt\u201c genannt, um dort wichtige Informationen für die Kranken und die Gemeinschaft zu erhalten."
                },
                {
                    heading: "Die Reise in die Anderswelt",
                    content: "In Schamanischen Reisen \u201ebereise\u201c ich für Dich die \u201eUnterwelt\u201c (so wird die Paralleldimension im Schamanismus genannt und hat nichts mit dem klassisch verbreiteten Begriff zu tun) und nehme für Dich Kontakt zu Deinen Geistführern, den Spirits auf. Das können Krafttiere, Pflanzen- & Baumwesen sein, aber auch die Wesen der Elemente, Mutter Erde und Deine Vertrauten und spirituelle Helfer der jenseitigen Dimension."
                },
                {
                    heading: "Seelische Themen und Traumaheilung",
                    content: "In einer Schamanischen Reise ist es mir möglich, mir Deine seelischen Themen und in Deinem Unterbewusstsein Verborgenes anzusehen. Viele emotionale Wunden und Traumata und auch energetische Verstrickungen können in der Schamanischen Reise aufgearbeitet werden."
                },
                {
                    heading: "Lösung alter Bindungen und Seelenverträge",
                    content: "Auch Flüche, Verwünschungen, Seelenverträge, Schwüre, Eide und Gelübde (z.\u202fB. Armutsgelübde, Keuschheitsgelübde oder ein Gelübde, dass Dich an eine andere Person bindet) \u2013 egal, ob aus diesem oder einem vergangenen Leben \u2013 werde ich für Dich finden und lösen."
                },
                {
                    heading: "Fremdenergien und Besetzungen",
                    content: "Und manchmal verhindern auch Fremdenergien und -besetzungen, dass Du Dein Leben in Freude und Leichtigkeit frei gestalten und genießen kannst, oder verhindern, dass Du Pläne umsetzt und Deine Ziele erreichst. Diese Energien wahrzunehmen und in ihre \u201eWelt\u201c zurückzuschicken ist auch Teil meiner Aufgabe."
                },
                {
                    heading: "Krafttiere \u2013 Deine spirituellen Begleiter",
                    content: "Oft erhalte ich auch Botschaften, insbesondere von Kraft- oder Helfertieren, welche Dich bei Deiner Heilung unterstützen möchten. Denn Krafttiere sind Seelenführer und Weggefährten, welche in Dein Leben treten und Dich begleiten. Sie kommen, um Dich zu schützen, zu heilen und zu lehren. Sie helfen Dir, Klarheit zu finden, führen Dich durch Krisen und helfen Dir bei Entscheidungen. Sie machen Dich auch auf Deine Stärken aufmerksam, zeigen Dir Deine ganz besonderen Fähigkeiten und weisen Dich liebevoll darauf hin, wenn Unbewusstes gelöst werden will."
                },
                {
                    heading: "Chakrenarbeit für ganzheitliche Heilung",
                    content: "Um auch Deinen Körper in den Heilungsphasen und Transformationsprozessen zu unterstützen, bringe ich auch Deine Chakren wieder in Balance. Chakren sind die Energiezentren in unserem System. Sind Deine Chakren blockiert oder nicht in Balance, kann die Energie in Deinem Körper nicht mehr frei fließen, was sich sowohl auf der physischen als auch auf psychischer Ebene bemerkbar macht."
                }
            ]}
            benefits={[
                "Kontakt zu Deinen Geistführern und Krafttieren",
                "Aufarbeitung seelischer Themen und Traumata",
                "Lösung von Flüchen, Verwünschungen und Seelenverträgen",
                "Befreiung von Fremdenergien und Besetzungen",
                "Seelenrückholung verlorener Seelenanteile",
                "Chakrenausgleich für ganzheitliche Balance",
                "Botschaften Deiner spirituellen Begleiter empfangen",
            ]}
            process={[
                "Wir sprechen über Dein Anliegen und ich erkläre Dir den Ablauf der Schamanischen Reise.",
                "Ich begebe mich in den schamanischen Bewusstseinszustand und reise in die Anderswelt \u2013 für Dich.",
                "Dort nehme ich Kontakt zu Deinen Geistführern, Krafttieren und spirituellen Helfern auf und empfange ihre Botschaften.",
                "Nach der Reise teile ich Dir alles mit, was mir gezeigt wurde, und wir integrieren die Heilung gemeinsam.",
            ]}
            cta="In Liebe, Yvonne \u2661 \u2013 So kannst Du Deinen Termin bei mir vereinbaren. Ich freue mich auf Dich."
            price="€ 325"
            priceNote="inkl. MwSt. · inklusive Vor- und Nachgespräch"
        />
    );
}
