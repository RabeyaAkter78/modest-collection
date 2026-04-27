import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

export interface JwtPayload {
  sub: string;
  email: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function signToken(payload: JwtPayload, expiresIn: any = "7d") {
  const options: jwt.SignOptions = { algorithm: "HS256", expiresIn };
  return jwt.sign(payload, SECRET, options);
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET) as JwtPayload;
}
