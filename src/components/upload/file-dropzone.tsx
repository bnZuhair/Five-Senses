import { GraduationCap } from "lucide-react";
import { useCallback } from "react";

interface FileDropzoneProps {
  onAdd?: (file: File) => void;
}

export function FileDropzone({ onAdd }: FileDropzoneProps) {
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0 && onAdd) {
      // In a real app we'd validate file type/size here and possibly handle multiple files
      Array.from(e.target.files).forEach(file => onAdd(file));
      // Reset input so the same file can be selected again if removed
      e.target.value = '';
    }
  };

  return (
    <div className="relative w-full rounded-2xl border-2 border-dashed border-primary/30 bg-primary/[0.02] p-12 text-center hover:bg-primary/[0.04] transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[280px]">
      <input 
        type="file" 
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
        onChange={handleFileChange}
        multiple
        accept=".pdf,.docx,.jpg,.jpeg,.png"
      />
      <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
        <GraduationCap className="h-8 w-8" />
      </div>
      <p className="text-lg font-bold text-primary mb-2">اسحب الملف هنا أو اضغط للاختيار</p>
      <p className="text-sm text-text-secondary">يدعم PDF, DOCX, JPG (حد أقصى 20 ميجابايت)</p>
    </div>
  );
}
