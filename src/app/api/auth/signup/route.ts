import { NextResponse } from "next/server";
import { z } from "zod";
import { getUserByEmail, saveUser } from "@/server/db";
import { hashPassword } from "@/server/password";
import { generateOtp, sendOtp } from "@/server/otp";
import { setOtp } from "@/server/db";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  password: z.string().min(6),
});

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  const { name, email, phone, password } = parsed.data;

  if (getUserByEmail(email)) {
    return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  }

  const passwordHash = await hashPassword(password);
  const user = {
    id: crypto.randomUUID(),
    name,
    email,
    phone,
    passwordHash,
    verified: false,
    createdAt: Date.now(),
  };
  saveUser(user);

  const code = generateOtp();
  setOtp(email, code);
  await sendOtp(email, code);

  return NextResponse.json({ message: "Account created, OTP sent" });
}
