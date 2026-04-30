import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, History } from "lucide-react";

export function ResourceCenter() {
   return (
      <Card className="h-full border-danger/20 bg-surface-card shadow-sm">
         <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold text-danger flex items-center gap-2">
               مركز المراجعة للجلسات
            </CardTitle>
         </CardHeader>
         <CardContent className="space-y-4">
            {/* Performance Alert */}
            <div className="rounded-xl border border-border p-4 bg-surface/50">
               <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-danger">
                     <Clock className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                     <h4 className="font-bold text-primary">أثر الحالة النفسية على الجسد</h4>
                     <p className="text-sm text-text-secondary leading-relaxed">
                        مرت فترة منذ اخر مراجعة. ما رايك ان تمر بسرعة على الجلسة؟
                     </p>
                     <Button variant="link" className="px-0 text-danger font-bold h-auto py-1">
                        ابدأ المراجعة
                     </Button>
                  </div>
               </div>
            </div>

            {/* Performance Alert */}
            <div className="rounded-xl border border-border p-4 bg-surface/50">
               <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-danger">
                     <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                     <h4 className="font-bold text-primary">الجهاز العصبي المركزي</h4>
                     <p className="text-sm text-text-secondary leading-relaxed">
                        تراجع مستوى الأداء بنسبة 15% في الاختبار الأخير. ينصح بمراجعة الموصلات العصبية.
                     </p>
                     <Button variant="link" className="px-0 text-danger font-bold h-auto py-1">
                        ابدأ المراجعة
                     </Button>
                  </div>
               </div>
            </div>


            {/* Recent Review */}
            <div className="rounded-xl border border-border bg-surface p-4 opacity-75">
               <div className="flex items-center gap-3">
                  <History className="h-5 w-5 text-text-secondary" />
                  <div>
                     <p className="text-sm font-medium text-text-secondary">مراجعة سابقة: السمع</p>
                     <p className="text-xs text-text-secondary/70">اكتملت المراجعة بنجاح قبل يومين.</p>
                  </div>
               </div>
            </div>

         </CardContent>
      </Card>
   );
}
