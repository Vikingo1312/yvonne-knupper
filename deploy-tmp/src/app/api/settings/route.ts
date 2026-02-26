import { NextRequest, NextResponse } from "next/server";
import { initDB } from "@/lib/db";

export async function GET() {
    try {
        const db = await initDB();
        const result = await db.execute("SELECT key, value FROM settings");

        const settings: Record<string, string> = {};
        result.rows.forEach((row) => {
            settings[row.key as string] = row.value as string;
        });

        return NextResponse.json({ settings });
    } catch (err) {
        console.error("Failed to load settings:", err);
        return NextResponse.json({ settings: {} }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const updates = await req.json();
        const db = await initDB();

        // Expecting { key: value, key2: value2 }
        for (const [key, value] of Object.entries(updates)) {
            await db.execute({
                sql: "INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP",
                args: [key, String(value)],
            });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Failed to update settings:", err);
        return NextResponse.json({ error: "Failed to update" }, { status: 500 });
    }
}
