"use client";

import { useState } from "react";
import { InputModeSelector } from "@/components/upload/input-mode-selector";
import { FileDropzone } from "@/components/upload/file-dropzone";
import { TextInput } from "@/components/upload/text-input";
import { UrlInput } from "@/components/upload/url-input";
import { GuidedNotes } from "@/components/upload/guided-notes";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileUp, X, File, Link as LinkIcon, Type } from "lucide-react";
import Link from "next/link";

export type UploadSource = {
  id: string;
  type: "file" | "text" | "url";
  name: string;
  content?: any;
};

export default function UploadPage() {
  const [mode, setMode] = useState<"file" | "text" | "url">("file");
  const [sources, setSources] = useState<UploadSource[]>([]);

  const handleAddSource = (source: Omit<UploadSource, "id">) => {
    setSources((prev) => [...prev, { ...source, id: Math.random().toString(36).substr(2, 9) }]);
  };

  const handleRemoveSource = (id: string) => {
    setSources((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="pb-24 max-w-4xl mx-auto pt-8">
      
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-primary mb-3">أهلاً بك في عالم الاستكشاف الحسي</h2>
        <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
          ابدأ رحلتك التعليمية اليوم من خلال رفع المصادر التعليمية الخاصة بك وسنقوم بتحويلها إلى تجربة حسية متكاملة.
        </p>
      </div>

      <div className="bg-surface-card rounded-2xl p-8 lg:p-12 shadow-sm border border-border/50">
        
        <div className="flex items-center justify-center gap-2 mb-10 text-primary font-bold">
          <FileUp className="h-5 w-5" />
          <span>مركز رفع المصادر</span>
        </div>

        <InputModeSelector mode={mode} setMode={setMode} />

        <div className="mt-8 transition-all duration-300">
          {mode === "file" && <FileDropzone onAdd={(file) => handleAddSource({ type: "file", name: file.name, content: file })} />}
          {mode === "text" && <TextInput onAdd={(text) => handleAddSource({ type: "text", name: "نص مضاف", content: text })} />}
          {mode === "url" && <UrlInput onAdd={(url) => handleAddSource({ type: "url", name: url, content: url })} />}
        </div>

        {/* Added Sources List */}
        {sources.length > 0 && (
          <div className="mt-8 border-t border-border/50 pt-8">
            <h3 className="text-sm font-bold text-primary mb-4">المصادر المضافة ({sources.length})</h3>
            <div className="flex flex-col gap-3">
              {sources.map((source) => (
                <div key={source.id} className="flex items-center justify-between p-3 rounded-lg border border-border bg-surface/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-surface rounded-md text-text-secondary">
                      {source.type === "file" && <File className="h-4 w-4" />}
                      {source.type === "text" && <Type className="h-4 w-4" />}
                      {source.type === "url" && <LinkIcon className="h-4 w-4" />}
                    </div>
                    <span className="text-sm font-medium text-primary line-clamp-1 break-all" dir="auto">
                      {source.name}
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleRemoveSource(source.id)} className="text-text-secondary hover:text-danger rounded-full shrink-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <GuidedNotes />

        <div className="mt-12 flex justify-center">
          <Link href="/session/new">
            <Button size="lg" disabled={sources.length === 0} className="h-14 px-12 rounded-full shadow-md bg-primary hover:bg-primary/90 text-white text-lg font-bold gap-3 transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none">
              <span>بدء الجلسة التعلمية</span>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
