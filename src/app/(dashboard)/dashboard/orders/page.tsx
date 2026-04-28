"use client";

import { ShoppingBag, Package, Clock, CheckCircle } from "lucide-react";

const mockOrders = [
  {
    id: "ORD-001",
    date: "2025-01-15",
    status: "Delivered",
    total: 2450,
    items: 3,
  },
  {
    id: "ORD-002",
    date: "2025-01-20",
    status: "Processing",
    total: 1800,
    items: 2,
  },
  {
    id: "ORD-003",
    date: "2025-02-01",
    status: "Shipped",
    total: 3200,
    items: 4,
  },
];

const statusConfig: Record<string, { icon: typeof CheckCircle; color: string; bg: string }> = {
  Delivered: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
  Processing: { icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
  Shipped: { icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
};

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-stone-900">My Orders</h1>
        <p className="mt-1 text-sm text-stone-500">Track and manage your orders</p>
      </div>

      {mockOrders.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-stone-200 bg-white py-16">
          <ShoppingBag className="h-12 w-12 text-stone-300" />
          <p className="mt-4 text-lg font-medium text-stone-900">No orders yet</p>
          <p className="text-sm text-stone-500">Start shopping to see your orders here</p>
        </div>
      ) : (
        <div className="space-y-4">
          {mockOrders.map((order) => {
            const config = statusConfig[order.status] || statusConfig.Processing;
            const StatusIcon = config.icon;
            return (
              <div
                key={order.id}
                className="rounded-xl border border-stone-200 bg-white p-5 transition-shadow hover:shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-stone-900">{order.id}</p>
                    <p className="text-xs text-stone-500">{order.date}</p>
                  </div>
                  <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 ${config.bg}`}>
                    <StatusIcon className={`h-3.5 w-3.5 ${config.color}`} />
                    <span className={`text-xs font-medium ${config.color}`}>{order.status}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-4">
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <span>{order.items} items</span>
                  </div>
                  <p className="text-lg font-semibold text-stone-900">৳{order.total.toLocaleString()}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
