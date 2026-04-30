"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { LayoutDashboard, Calendar, Settings } from "lucide-react";

const iconMap = {
  LayoutDashboard,
  Calendar,
  Settings,
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-l bg-surface-card flex flex-col h-full shrink-0">
      <div className="h-16 flex items-center px-6 border-b">
        <h1 className="text-xl font-bold text-primary">حواس الخمسة</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {NAV_ITEMS.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-text-secondary hover:bg-surface hover:text-primary"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
