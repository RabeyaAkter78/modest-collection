"use client";

import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { ShoppingBag, Heart, User, Clock } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { user } = useAuth();
  const { items } = useCart();
  const { count: wishlistCount } = useWishlist();

  const stats = [
    {
      label: "Cart Items",
      value: items.reduce((sum, i) => sum + i.quantity, 0),
      icon: ShoppingBag,
      href: "/cart",
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Wishlist",
      value: wishlistCount,
      icon: Heart,
      href: "/dashboard/wishlist",
      color: "bg-pink-50 text-pink-600",
    },
    {
      label: "Profile",
      value: "View",
      icon: User,
      href: "/dashboard/profile",
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Member Since",
      value: "Today",
      icon: Clock,
      href: "#",
      color: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="rounded-xl border border-stone-200 bg-white p-6">
        <h1 className="text-xl font-semibold text-stone-900">
          Welcome back, {user?.name?.split(" ")[0]}!
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          Here&apos;s an overview of your account activity.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="group rounded-xl border border-stone-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-lg p-2.5 ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 text-2xl font-semibold text-stone-900">{stat.value}</p>
              <p className="text-sm text-stone-500">{stat.label}</p>
            </Link>
          );
        })}
      </div>

      {/* Quick actions */}
      <div className="rounded-xl border border-stone-200 bg-white p-6">
        <h2 className="text-lg font-medium text-stone-900">Quick Actions</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/borkha"
            className="flex items-center gap-3 rounded-lg border border-stone-200 p-4 transition-colors hover:bg-stone-50"
          >
            <div className="rounded-lg bg-stone-100 p-2">
              <ShoppingBag className="h-4 w-4 text-stone-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-stone-900">Browse Collection</p>
              <p className="text-xs text-stone-500">Shop new arrivals</p>
            </div>
          </Link>
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 rounded-lg border border-stone-200 p-4 transition-colors hover:bg-stone-50"
          >
            <div className="rounded-lg bg-stone-100 p-2">
              <User className="h-4 w-4 text-stone-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-stone-900">Edit Profile</p>
              <p className="text-xs text-stone-500">Update your information</p>
            </div>
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 rounded-lg border border-stone-200 p-4 transition-colors hover:bg-stone-50"
          >
            <div className="rounded-lg bg-stone-100 p-2">
              <Heart className="h-4 w-4 text-stone-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-stone-900">Account Settings</p>
              <p className="text-xs text-stone-500">Manage your account</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
