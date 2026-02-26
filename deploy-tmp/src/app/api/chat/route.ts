import { NextRequest, NextResponse } from "next/server";
import { initDB } from "@/lib/db";

// GET – Load messages for a session
export async function GET(req: NextRequest) {
    const sessionId = req.nextUrl.searchParams.get("sessionId");
    if (!sessionId) {
        return NextResponse.json({ messages: [] });
    }

    try {
        const db = await initDB();
        const result = await db.execute({
            sql: "SELECT role, content FROM chat_messages WHERE session_id = ? ORDER BY created_at ASC",
            args: [sessionId],
        });

        const messages = result.rows.map((row) => ({
            role: row.role as "user" | "assistant",
            content: row.content as string,
        }));

        return NextResponse.json({ messages });
    } catch {
        return NextResponse.json({ messages: [] });
    }
}

// POST – Save a new message
export async function POST(req: NextRequest) {
    try {
        const { sessionId, role, content } = await req.json();
        if (!sessionId || !role || !content) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const db = await initDB();

        // Ensure session exists
        await db.execute({
            sql: "INSERT OR IGNORE INTO chat_sessions (id) VALUES (?)",
            args: [sessionId],
        });

        // Update session timestamp
        await db.execute({
            sql: "UPDATE chat_sessions SET updated_at = CURRENT_TIMESTAMP WHERE id = ?",
            args: [sessionId],
        });

        // Insert message
        await db.execute({
            sql: "INSERT INTO chat_messages (session_id, role, content) VALUES (?, ?, ?)",
            args: [sessionId, role, content],
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Chat save error:", err);
        return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    }
}
