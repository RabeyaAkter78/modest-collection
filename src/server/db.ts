export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  passwordHash: string;
  verified: boolean;
  createdAt: number;
}

export const users = new Map<string, User>();
export const otps = new Map<string, { code: string; expiresAt: number }>();

export function getUserByEmail(email: string) {
  return users.get(email.toLowerCase());
}

export function saveUser(user: User) {
  users.set(user.email.toLowerCase(), user);
}

export function setOtp(email: string, code: string, ttlMs = 10 * 60 * 1000) {
  otps.set(email.toLowerCase(), {
    code,
    expiresAt: Date.now() + ttlMs,
  });
}

export function verifyOtp(email: string, code: string) {
  const entry = otps.get(email.toLowerCase());
  if (!entry) return false;
  const valid = entry.code === code && entry.expiresAt > Date.now();
  if (valid) otps.delete(email.toLowerCase());
  return valid;
}
