"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAdmin(formData: FormData) {
    const username = formData.get("username");
    const password = formData.get("password");

    // Hardcoded credentials
    const validUsername = "admin";
    const validPassword = "Elfe2026";

    if (username === validUsername && password === validPassword) {
        // Set cookie for 30 days
        const thirtyDays = 30 * 24 * 60 * 60 * 1000;
        const cookieStore = await cookies();
        cookieStore.set("admin_session", "authenticated", {
            expires: new Date(Date.now() + thirtyDays),
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/admin"
        });

        return { success: true };
    }

    return { error: "Falsches Passwort" };
}

export async function logoutAdmin() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
    redirect("/admin/login");
}
