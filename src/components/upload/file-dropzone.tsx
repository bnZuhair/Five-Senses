import { GraduationCap } from "lucide-react";

export function FileDropzone() {
  return (
    <div className="w-full rounded-2xl border-2 border-dashed border-primary/30 bg-primary/[0.02] p-12 text-center hover:bg-primary/[0.04] transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[280px]">
      <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
        <GraduationCap className="h-8 w-8" />
      </div>
      <p className="text-lg font-bold text-primary mb-2">اسحب الملف هنا أو اضغط للاختيار</p>
      <p className="text-sm text-text-secondary">يدعم PDF, DOCX, JPG (حد أقصى 20 ميجابايت)</p>
    </div>
  );
}
