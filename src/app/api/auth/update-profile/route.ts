import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyToken } from "@/server/jwt";
import { getUserByEmail, saveUser } from "@/server/db";

const schema = z.object({
  name: z.string().min(2).optional(),
  phone: z.string().optional(),
  avatar: z.string().optional(),
});

export async function PATCH(req: Request) {
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

    if (parsed.data.name !== undefined) user.name = parsed.data.name;
    if (parsed.data.phone !== undefined) user.phone = parsed.data.phone;
    if (parsed.data.avatar !== undefined) user.avatar = parsed.data.avatar;

    saveUser(user);
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
      },
    });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
