"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function BackButton({ className, variant = "light" }: BackButtonProps) {
  const router = useRouter();

  const baseStyles = "inline-flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-all";
  const variantStyles = variant === "dark"
    ? "bg-stone-900/80 text-white hover:bg-stone-900 backdrop-blur-sm"
    : "bg-white/80 text-stone-700 hover:bg-white hover:text-stone-900 border border-stone-200 backdrop-blur-sm";

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={className ?? `${baseStyles} ${variantStyles}`}
      aria-label="Go back"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </button>
  );
}
