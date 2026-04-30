import { RECENT_SESSIONS } from "@/lib/constants";
import { SessionCard } from "./session-card";
import { Layers } from "lucide-react";
import Link from "next/link";

export function RecentSessions() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" />
          جلسات التحويل الأخيرة
        </h3>
        <Link href="/sessions" className="text-sm font-bold text-primary hover:underline">
          عرض الكل
        </Link>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
        {RECENT_SESSIONS.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
}
