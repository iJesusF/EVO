"use client";

import { Upload } from "lucide-react";

export function FileUploader({ onFileSelected, compact = false }: { onFileSelected: (file: File) => void; compact?: boolean }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed bg-card p-4 text-sm hover:bg-accent">
      <Upload className="h-5 w-5" />
      <span>
        <b>{compact ? "Upload new database" : "Upload Excel workbook"}</b>
        {!compact && (
          <>
            <br />
            <span className="text-muted-foreground">.xlsx client-side import; no server upload.</span>
          </>
        )}
      </span>
      <input
        className="hidden"
        type="file"
        accept=".xlsx,.xls"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            onFileSelected(file);
          }
          event.currentTarget.value = "";
        }}
      />
    </label>
  );
}
