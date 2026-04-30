import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, CheckCircle2, Clock } from "lucide-react";
import { SENSES } from "@/lib/constants";

export function StatsSection() {
  // Mock data for the chart
  const preferenceData = [
    { sense: 'sight', value: 65 },
    { sense: 'hearing', value: 45 },
    { sense: 'touch', value: 30 },
    { sense: 'memory', value: 80 },
  ];

  return (
    <div className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/10">
      <div className="flex items-center gap-2 mb-8">
        <BarChart3 className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-bold text-primary">إحصائيات الإنجاز</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Completed Sessions Stat */}
        <Card className="border-none shadow-sm h-full flex flex-col justify-center items-center p-8 text-center bg-surface-card rounded-xl">
          <CheckCircle2 className="h-10 w-10 text-accent-teal mb-4" />
          <div className="text-5xl font-black text-primary mb-2 tracking-tight">12</div>
          <p className="text-sm font-medium text-text-secondary">الجلسات المكتملة</p>
        </Card>

        {/* Hours Stat */}
        <Card className="border-none shadow-sm h-full flex flex-col justify-center items-center p-8 text-center bg-surface-card rounded-xl">
          <Clock className="h-10 w-10 text-accent-gold mb-4" />
          <div className="text-5xl font-black text-primary mb-2 tracking-tight">14.5</div>
          <p className="text-sm font-medium text-text-secondary">ساعات الجلسات</p>
        </Card>

        {/* Sense Preferences Chart */}
        <Card className="border-none shadow-sm h-full flex flex-col p-6 bg-surface-card rounded-xl">
          <h4 className="text-sm font-bold text-primary text-center mb-6">تطور التفضيلات الحسية</h4>
          <p className="text-xs text-text-secondary text-right w-full mb-4">آخر 30 يوم</p>
          
          <div className="flex-1 flex items-end justify-between px-2 pt-4">
            {preferenceData.map((data) => {
              const senseDef = SENSES.find(s => s.id === data.sense);
              return (
                <div key={data.sense} className="flex flex-col items-center gap-3 w-10">
                  <div className="w-full bg-surface rounded-t-sm relative h-[100px] flex items-end justify-center">
                    <div 
                      className="w-full rounded-t-sm transition-all"
                      style={{ 
                        height: `${data.value}%`, 
                        backgroundColor: senseDef?.color 
                      }}
                    />
                  </div>
                  <span className="text-xs font-medium text-text-secondary">{senseDef?.label}</span>
                </div>
              );
            })}
          </div>
        </Card>

      </div>
    </div>
  );
}
