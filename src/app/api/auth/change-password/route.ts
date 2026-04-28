import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyToken } from "@/server/jwt";
import { getUserByEmail, saveUser } from "@/server/db";
import { comparePassword, hashPassword } from "@/server/password";

const schema = z.object({
  currentPassword: z.string().min(6),
  newPassword: z.string().min(6),
});

export async function POST(req: Request) {
  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const payload = verifyToken(auth.slice(7));
    const user = getUserByEmail(payload.email);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { currentPassword, newPassword } = parsed.data;
    const ok = await comparePassword(currentPassword, user.passwordHash);
    if (!ok) {
      return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });
    }

    user.passwordHash = await hashPassword(newPassword);
    saveUser(user);
    return NextResponse.json({ message: "Password changed successfully" });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
