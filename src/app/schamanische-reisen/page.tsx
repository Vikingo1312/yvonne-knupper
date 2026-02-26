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
                    content: "Der Schamanismus ist eine der \u00e4ltesten spirituellen Praktiken der Menschheitsgeschichte, welche weltweit verbreitet ist. Schamanen und Medizinfrauen & -m\u00e4nner waren die Bewahrer des traditionellen Wissens und als Heiler tief verbunden mit Mutter Erde und der Natur. Sie hatten Zugang in die \u201eAnderswelt\u201c oder auch \u201eUnterwelt\u201c genannt, um dort wichtige Informationen f\u00fcr die Kranken und die Gemeinschaft zu erhalten."
                },
                {
                    heading: "Die Reise in die Anderswelt",
                    content: "In Schamanischen Reisen \u201ebereise\u201c ich f\u00fcr Dich die \u201eUnterwelt\u201c (so wird die Paralleldimension im Schamanismus genannt und hat nichts mit dem klassisch verbreiteten Begriff zu tun) und nehme f\u00fcr Dich Kontakt zu Deinen Geistf\u00fchrern, den Spirits auf. Das k\u00f6nnen Krafttiere, Pflanzen- & Baumwesen sein, aber auch die Wesen der Elemente, Mutter Erde und Deine Vertrauten und spirituelle Helfer der jenseitigen Dimension."
                },
                {
                    heading: "Seelische Themen und Traumaheilung",
                    content: "In einer Schamanischen Reise ist es mir m\u00f6glich, mir Deine seelischen Themen und in Deinem Unterbewusstsein Verborgenes anzusehen. Viele emotionale Wunden und Traumata und auch energetische Verstrickungen k\u00f6nnen in der Schamanischen Reise aufgearbeitet werden."
                },
                {
                    heading: "L\u00f6sung alter Bindungen und Seelenvertr\u00e4ge",
                    content: "Auch Fl\u00fcche, Verw\u00fcnschungen, Seelenvertr\u00e4ge, Schw\u00fcre, Eide und Gel\u00fcbde (z.\u202fB. Armutsgel\u00fcbde, Keuschheitsgel\u00fcbde oder ein Gel\u00fcbde, dass Dich an eine andere Person bindet) \u2013 egal, ob aus diesem oder einem vergangenen Leben \u2013 werde ich f\u00fcr Dich finden und l\u00f6sen."
                },
                {
                    heading: "Fremdenergien und Besetzungen",
                    content: "Und manchmal verhindern auch Fremdenergien und -besetzungen, dass Du Dein Leben in Freude und Leichtigkeit frei gestalten und genie\u00dfen kannst, oder verhindern, dass Du Pl\u00e4ne umsetzt und Deine Ziele erreichst. Diese Energien wahrzunehmen und in ihre \u201eWelt\u201c zur\u00fcckzuschicken ist auch Teil meiner Aufgabe."
                },
                {
                    heading: "Krafttiere \u2013 Deine spirituellen Begleiter",
                    content: "Oft erhalte ich auch Botschaften, insbesondere von Kraft- oder Helfertieren, welche Dich bei Deiner Heilung unterst\u00fctzen m\u00f6chten. Denn Krafttiere sind Seelenf\u00fchrer und Weggef\u00e4hrten, welche in Dein Leben treten und Dich begleiten. Sie kommen, um Dich zu sch\u00fctzen, zu heilen und zu lehren. Sie helfen Dir, Klarheit zu finden, f\u00fchren Dich durch Krisen und helfen Dir bei Entscheidungen. Sie machen Dich auch auf Deine St\u00e4rken aufmerksam, zeigen Dir Deine ganz besonderen F\u00e4higkeiten und weisen Dich liebevoll darauf hin, wenn Unbewusstes gel\u00f6st werden will."
                },
                {
                    heading: "Chakrenarbeit f\u00fcr ganzheitliche Heilung",
                    content: "Um auch Deinen K\u00f6rper in den Heilungsphasen und Transformationsprozessen zu unterst\u00fctzen, bringe ich auch Deine Chakren wieder in Balance. Chakren sind die Energiezentren in unserem System. Sind Deine Chakren blockiert oder nicht in Balance, kann die Energie in Deinem K\u00f6rper nicht mehr frei flie\u00dfen, was sich sowohl auf der physischen als auch auf psychischer Ebene bemerkbar macht."
                }
            ]}
            benefits={[
                "Kontakt zu Deinen Geistf\u00fchrern und Krafttieren",
                "Aufarbeitung seelischer Themen und Traumata",
                "L\u00f6sung von Fl\u00fcchen, Verw\u00fcnschungen und Seelenvertr\u00e4gen",
                "Befreiung von Fremdenergien und Besetzungen",
                "Seelenr\u00fcckholung verlorener Seelenanteile",
                "Chakrenausgleich f\u00fcr ganzheitliche Balance",
                "Botschaften Deiner spirituellen Begleiter empfangen",
            ]}
            process={[
                "Wir sprechen \u00fcber Dein Anliegen und ich erkl\u00e4re Dir den Ablauf der Schamanischen Reise.",
                "Ich begebe mich in den schamanischen Bewusstseinszustand und reise in die Anderswelt \u2013 f\u00fcr Dich.",
                "Dort nehme ich Kontakt zu Deinen Geistf\u00fchrern, Krafttieren und spirituellen Helfern auf und empfange ihre Botschaften.",
                "Nach der Reise teile ich Dir alles mit, was mir gezeigt wurde, und wir integrieren die Heilung gemeinsam.",
            ]}
            cta={"In Liebe, Yvonne \u2661 \u2013 So kannst Du Deinen Termin bei mir vereinbaren. Ich freue mich auf Dich."}
            price={"\u20ac 325"}
            priceNote="inkl. MwSt. \u00b7 inklusive Vor- und Nachgespr\u00e4ch"
        />
    );
}
