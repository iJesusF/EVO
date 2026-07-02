"use client";

import { Database, Trash2 } from "lucide-react";
import type { ExcelFileMetadata } from "@/lib/types";
import { Button } from "./ui/button";
import { FileUploader } from "./FileUploader";

const formatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Unknown" : formatter.format(date);
}

function formatBytes(bytes: number) {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}

export function LoadedFileStatus({
  metadata,
  onRemove,
  onFileSelected,
}: {
  metadata?: ExcelFileMetadata;
  onRemove: () => void;
  onFileSelected: (file: File) => void;
}) {
  if (!metadata) {
    return null;
  }

  return (
    <section className="rounded-xl border bg-card p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2 text-primary">
            <Database className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">Loaded database</p>
            <p className="font-medium">{metadata.fileName}</p>
            <p className="text-sm text-muted-foreground">
              Uploaded {formatDate(metadata.uploadedAt)} · Last loaded {formatDate(metadata.lastLoadedAt)} · {formatBytes(metadata.fileSize)}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <FileUploader compact onFileSelected={onFileSelected} />
          <Button variant="destructive" className="gap-2" onClick={onRemove}>
            <Trash2 className="h-4 w-4" />
            Remove database
          </Button>
        </div>
      </div>
    </section>
  );
}
