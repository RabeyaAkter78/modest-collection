import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

export interface JwtPayload {
  sub: string;
  email: string;
}

export function signToken(payload: JwtPayload, expiresIn = "7d") {
  return jwt.sign(payload, SECRET, { algorithm: "HS256", expiresIn });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET) as JwtPayload;
}
