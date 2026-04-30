"use client";

import { Bell, User } from "lucide-react";
import { MOCK_USER } from "@/lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Topbar() {
  return (
    <header className="h-16 border-b bg-surface-card flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4">
        {/* Placeholder for left side in RTL (right visually in LTR, but we are RTL so this is right side) */}
      </div>

      <div className="flex items-center gap-4 mr-auto">
        <Button variant="ghost" size="icon" className="text-text-secondary rounded-full">
          <Bell className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-auto flex items-center gap-2 pl-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={MOCK_USER.avatar} alt={MOCK_USER.name} />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {MOCK_USER.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-right hidden sm:flex">
                <span className="text-sm font-medium leading-none">{MOCK_USER.name}</span>
                <span className="text-xs text-text-secondary mt-1">{MOCK_USER.role}</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>حسابي</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
            <DropdownMenuItem>الإعدادات</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-danger focus:text-danger">
              تسجيل الخروج
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
