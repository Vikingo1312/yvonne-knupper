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

export async function PATCH(req: NextRequest) {
    try {
        const { id, status } = await req.json();

        if (!id || !status) {
            return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
        }

        const db = await initDB();
        await db.execute({
            sql: "UPDATE leads SET status = ? WHERE id = ?",
            args: [status, id],
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Failed to update lead:", err);
        return NextResponse.json({ error: "Failed to update" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ error: "Missing id" }, { status: 400 });
        }

        const db = await initDB();
        await db.execute({
            sql: "DELETE FROM leads WHERE id = ?",
            args: [id],
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Failed to delete lead:", err);
        return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
    }
}
