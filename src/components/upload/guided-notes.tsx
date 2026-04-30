import { Textarea } from "@/components/ui/textarea";
import { AlignRight } from "lucide-react";

export function GuidedNotes() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="flex items-center gap-2 mb-4">
        <AlignRight className="h-5 w-5 text-primary" />
        <h3 className="text-base font-bold text-primary">ملاحظات موجهة</h3>
      </div>
      <Textarea 
        placeholder="حدد الأجزاء التي تريد التركيز عليها أو أي توجيهات خاصة بالدرس..." 
        className="min-h-[100px] resize-none rounded-xl border-border bg-surface-card/50 p-4"
      />
    </div>
  );
}
