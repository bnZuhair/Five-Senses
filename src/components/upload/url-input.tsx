import { Input } from "@/components/ui/input";

export function UrlInput() {
  return (
    <div className="w-full">
      <div className="rounded-2xl border-2 border-border/60 bg-transparent p-12 min-h-[280px] flex items-center justify-center">
        <Input 
          type="url" 
          placeholder="https://example.com/article" 
          className="max-w-xl h-14 text-lg text-center rounded-xl border-border/60 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20"
          dir="ltr"
        />
      </div>
    </div>
  );
}
