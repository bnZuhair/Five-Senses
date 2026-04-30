import { WelcomeHeader } from "@/components/dashboard/welcome-header";
import { ResourceCenter } from "@/components/dashboard/resource-center";
import { RecentSessions } from "@/components/dashboard/recent-sessions";
import { StatsSection } from "@/components/dashboard/stats-section";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="pb-24">
      <WelcomeHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Content Area (Sessions) */}
        <div className="lg:col-span-8 order-2 lg:order-1">
          <RecentSessions />
        </div>

        {/* Sidebar Area (Resource Center) */}
        <div className="lg:col-span-4 order-1 lg:order-2">
          <ResourceCenter />
        </div>
      </div>

      <StatsSection />

      {/* Floating Action Button for New Session */}
      <div className="fixed bottom-8 left-8">
        <Link href="/upload">
          <Button size="lg" className="h-14 px-6 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white text-lg font-bold gap-2">
            <Plus className="h-5 w-5" />
            جلسة جديدة
          </Button>
        </Link>
      </div>
    </div>
  );
}
