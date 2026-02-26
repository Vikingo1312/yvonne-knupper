import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        const validUsername = "admin";
        const validPassword = "Elfe2026";

        if (username === validUsername && password === validPassword) {
            const thirtyDays = 30 * 24 * 60 * 60;
            const response = NextResponse.json({ success: true });
            response.cookies.set("admin_session", "authenticated", {
                maxAge: thirtyDays,
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
            });
            return response;
        }

        return NextResponse.json({ error: "Falsches Passwort oder Benutzername" }, { status: 401 });
    } catch {
        return NextResponse.json({ error: "Fehler beim Login" }, { status: 500 });
    }
}
