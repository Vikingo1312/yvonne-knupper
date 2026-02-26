import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import RuneParticles from "@/components/RuneParticles";
import ScrollIndicator from "@/components/ScrollIndicator";
import ThemeProvider from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";
import LiveStatusBadge from "@/components/LiveStatusBadge";

import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata: Metadata = {
    title: "Yvonne Knupper | Spirituelle Lebensberatung",
    description:
        "Kartenlegen, Schamanische Reisen, Dualseelen Coaching, Kerzenrituale & Matrix Quantenheilung. Individuelle spirituelle Beratung mit Herz und Seele.",
    keywords: [
        "Kartenlegen",
        "Schamanische Reisen",
        "Dualseelen",
        "Spirituelle Beratung",
        "Lenormand",
        "Energiearbeit",
        "Hamburg",
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de" className="dark">
            <body className="antialiased">
                <ThemeProvider>
                    <div id="announcement-bar"><AnnouncementBar /></div>
                    <Particles />
                    <RuneParticles />
                    <div className="nebula-overlay" />
                    <div id="main-navbar"><Navbar /></div>
                    <main className="relative z-10">{children}</main>
                    <div id="main-footer"><Footer /></div>
                    <ScrollIndicator />
                    <div id="chatbot-widget"><Chatbot /></div>
                    <div id="whatsapp-widget"><WhatsAppButton /></div>
                    <div id="live-status-widget"><LiveStatusBadge /></div>
                </ThemeProvider>
            </body>
        </html>
    );
}
