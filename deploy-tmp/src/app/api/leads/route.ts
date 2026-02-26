import { NextRequest, NextResponse } from "next/server";
import { initDB } from "@/lib/db";

export async function GET() {
    try {
        const db = await initDB();
        const result = await db.execute("SELECT * FROM leads ORDER BY created_at DESC");

        return NextResponse.json({ leads: result.rows });
    } catch (err) {
        console.error("Failed to fetch leads:", err);
        return NextResponse.json({ leads: [] }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, service, message } = await req.json();

        if (!name || (!email && !phone)) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const db = await initDB();
        await db.execute({
            sql: "INSERT INTO leads (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)",
            args: [name, email || null, phone || null, service || null, message || null],
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Failed to create lead:", err);
        return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
    }
}
