"use server"
import { cookies } from "next/headers";

export default async function DeleteSessionTokenCookie(): Promise<void> {
    const cookieStore = await cookies();

    cookieStore.set("session", "", {
        httpOnly: true, 
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 0,
        path: "/"
    })

}