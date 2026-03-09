import { NextResponse } from "next/server";
import { z } from "zod";
import { getUserByEmail, saveUser, verifyOtp } from "@/server/db";
import { hashPassword } from "@/server/password";

const schema = z.object({
  email: z.string().email(),
  code: z.string().length(6),
  password: z.string().min(6),
});

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  const { email, code, password } = parsed.data;
  const user = getUserByEmail(email);
  if (!user) {
    return NextResponse.json({ error: "Account not found" }, { status: 404 });
  }
  const ok = verifyOtp(email, code);
  if (!ok) {
    return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
  }
  user.passwordHash = await hashPassword(password);
  saveUser(user);
  return NextResponse.json({ message: "Password reset successful" });
}
