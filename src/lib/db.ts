import { createClient } from "@libsql/client";

const db = createClient({
    url: process.env.TURSO_DATABASE_URL || "file:local.db",
    authToken: process.env.TURSO_AUTH_TOKEN,
});

// Initialize the chat_messages table on first load
let initialized = false;

export async function initDB() {
    if (initialized) return db;

    await db.execute(`
        CREATE TABLE IF NOT EXISTS chat_sessions (
            id TEXT PRIMARY KEY,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    await db.execute(`
        CREATE TABLE IF NOT EXISTS chat_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT NOT NULL,
            role TEXT NOT NULL CHECK(role IN ('user', 'assistant')),
            content TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (session_id) REFERENCES chat_sessions(id)
        )
    `);

    // Admin Settings Table (key-value store)
    await db.execute(`
        CREATE TABLE IF NOT EXISTS settings (
            key TEXT PRIMARY KEY,
            value TEXT NOT NULL,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Leads / Inquiries Table
    await db.execute(`
        CREATE TABLE IF NOT EXISTS leads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT,
            phone TEXT,
            service TEXT,
            message TEXT,
            status TEXT DEFAULT 'new',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Insert default settings if they don't exist
    await db.execute(`INSERT OR IGNORE INTO settings (key, value) VALUES ('is_live', 'false')`);
    await db.execute(`INSERT OR IGNORE INTO settings (key, value) VALUES ('working_hours', 'Nach Vereinbarung')`);
    await db.execute(`INSERT OR IGNORE INTO settings (key, value) VALUES ('promo_active', 'false')`);
    await db.execute(`INSERT OR IGNORE INTO settings (key, value) VALUES ('promo_text', '')`);

    initialized = true;
    return db;
}

export { db };
