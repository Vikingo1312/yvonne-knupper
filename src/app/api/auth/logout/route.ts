import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json({ success: true });
    // Clear cookie at both paths (old path was /admin)
    response.cookies.set("admin_session", "", {
        maxAge: 0,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });
    response.cookies.set("admin_session", "", {
        maxAge: 0,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/admin",
    });
    return response;
}
