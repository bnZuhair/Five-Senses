import { Textarea } from "@/components/ui/textarea";

export function TextInput() {
  return (
    <div className="w-full">
      <Textarea 
        placeholder="الصق النص هنا..." 
        className="min-h-[280px] w-full resize-none rounded-2xl border-2 border-border/60 bg-transparent p-6 text-base focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20"
      />
    </div>
  );
}
