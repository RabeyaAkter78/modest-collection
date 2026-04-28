"use client";

import { useState, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import { User, Mail, Phone, Camera, Save } from "lucide-react";

export default function ProfilePage() {
  const { user, updateUser } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
  });
  const [avatarPreview, setAvatarPreview] = useState<string | null>(user?.avatar || null);
  const [avatarData, setAvatarData] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setError("Image must be less than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setAvatarPreview(result);
      setAvatarData(result);
    };
    reader.readAsDataURL(file);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const body: Record<string, string> = { name: form.name, phone: form.phone };
      if (avatarData) body.avatar = avatarData;

      const res = await fetch("/api/auth/update-profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      updateUser(data.user);
      setSuccess(true);
      setAvatarData(undefined);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-stone-900">My Profile</h1>
        <p className="mt-1 text-sm text-stone-500">Manage your personal information</p>
      </div>

      <div className="rounded-xl border border-stone-200 bg-white">
        {/* Avatar section */}
        <div className="flex flex-col items-center border-b border-stone-200 px-6 py-8">
          <div className="relative">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Profile"
                className="h-24 w-24 rounded-full object-cover ring-4 ring-stone-100"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-stone-200 text-2xl font-semibold text-stone-600 ring-4 ring-stone-100">
                {initials}
              </div>
            )}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-white shadow-lg transition-colors hover:bg-stone-800"
            >
              <Camera className="h-4 w-4" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <p className="mt-3 text-sm text-stone-500">Click the camera icon to change photo</p>
          <p className="text-xs text-stone-400">JPG, PNG or GIF. Max 2MB.</p>
        </div>

        {/* Form section */}
        <form onSubmit={submit} className="space-y-5 p-6">
          {error && (
            <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
          )}
          {success && (
            <div className="rounded-md bg-green-50 px-4 py-3 text-sm text-green-600">
              Profile updated successfully!
            </div>
          )}

          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                className="w-full rounded-lg border border-stone-200 py-2.5 pl-10 pr-3 text-sm transition-colors focus:border-stone-400 focus:outline-none"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                type="email"
                className="w-full rounded-lg border border-stone-200 bg-stone-50 py-2.5 pl-10 pr-3 text-sm text-stone-500"
                value={user?.email || ""}
                disabled
              />
            </div>
            <p className="mt-1 text-xs text-stone-400">Email cannot be changed</p>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                className="w-full rounded-lg border border-stone-200 py-2.5 pl-10 pr-3 text-sm transition-colors focus:border-stone-400 focus:outline-none"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
