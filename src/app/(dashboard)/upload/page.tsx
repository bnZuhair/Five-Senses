"use client";

import { useState } from "react";
import { InputModeSelector } from "@/components/upload/input-mode-selector";
import { FileDropzone } from "@/components/upload/file-dropzone";
import { TextInput } from "@/components/upload/text-input";
import { UrlInput } from "@/components/upload/url-input";
import { GuidedNotes } from "@/components/upload/guided-notes";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileUp } from "lucide-react";
import Link from "next/link";

export default function UploadPage() {
  const [mode, setMode] = useState<"file" | "text" | "url">("file");

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
          {mode === "file" && <FileDropzone />}
          {mode === "text" && <TextInput />}
          {mode === "url" && <UrlInput />}
        </div>

        <GuidedNotes />

        <div className="mt-12 flex justify-center">
          <Link href="/session/new">
            <Button size="lg" className="h-14 px-12 rounded-full shadow-md bg-primary hover:bg-primary/90 text-white text-lg font-bold gap-3 transition-transform hover:scale-105 active:scale-95">
              <span>بدء الجلسة التعلمية</span>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
