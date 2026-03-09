import { NextResponse } from "next/server";
import { z } from "zod";
import { getUserByEmail } from "@/server/db";
import { generateOtp, sendOtp } from "@/server/otp";
import { setOtp } from "@/server/db";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  const { email } = parsed.data;
  const user = getUserByEmail(email);
  if (!user) {
    return NextResponse.json({ error: "Account not found" }, { status: 404 });
  }
  const code = generateOtp();
  setOtp(email, code);
  await sendOtp(email, code);
  return NextResponse.json({ message: "OTP sent" });
}
