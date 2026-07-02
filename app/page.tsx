"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AlertTriangle, Flame, Moon, Sun } from "lucide-react";
import { DashboardCards } from "@/components/DashboardCards";
import { DeviceTable } from "@/components/DeviceTable";
import { ExportButton } from "@/components/ExportButton";
import { FileUploader } from "@/components/FileUploader";
import { FiltersBar } from "@/components/FiltersBar";
import { LoadedFileStatus } from "@/components/LoadedFileStatus";
import { ProgrammingList } from "@/components/ProgrammingList";
import { QCPanel } from "@/components/QCPanel";
import { RoomAccordion } from "@/components/RoomAccordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { readWorkbookFile } from "@/lib/excel";
import { deleteSavedExcelFile, getSavedExcelFile, getSavedExcelMetadata, isIndexedDbAvailable, saveExcelFile } from "@/lib/indexedDbExcel";
import { mockDevices } from "@/lib/mock-data";
import type { DeviceFilters, EditableField, ExcelFileMetadata, FireAlarmDevice, WorkbookState } from "@/lib/types";

const nav = ["Dashboard", "Master Table", "Programming View", "Room View", "QC", "Export"] as const;
type View = (typeof nav)[number];

export default function Home() {
  const [view, setView] = useState<View>("Dashboard");
  const [dark, setDark] = useState(false);
  const [state, setState] = useState<WorkbookState | undefined>();
  const [devices, setDevices] = useState<FireAlarmDevice[]>([]);
  const [metadata, setMetadata] = useState<ExcelFileMetadata | undefined>();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<DeviceFilters>({});
  const [isLoadingSavedFile, setIsLoadingSavedFile] = useState(true);
  const [persistenceWarning, setPersistenceWarning] = useState<string>();
  const [loadError, setLoadError] = useState<string>();

  useEffect(() => {
    async function loadSavedWorkbook() {
      if (!isIndexedDbAvailable()) {
        setPersistenceWarning("IndexedDB is not available in this browser, so the uploaded Excel database cannot persist after refresh.");
        setIsLoadingSavedFile(false);
        return;
      }

      try {
        const savedFile = await getSavedExcelFile();
        if (!savedFile) {
          setIsLoadingSavedFile(false);
          return;
        }

        const savedMetadata = await getSavedExcelMetadata();
        const workbookState = await readWorkbookFile(savedFile);
        setMetadata(savedMetadata);
        setState({ ...workbookState, metadata: savedMetadata });
        setDevices(workbookState.devices);
      } catch (error) {
        setLoadError(error instanceof Error ? error.message : "The saved Excel database could not be loaded.");
      } finally {
        setIsLoadingSavedFile(false);
      }
    }

    loadSavedWorkbook();
  }, []);

  const filtered = useMemo(
    () =>
      devices
        .filter((device) => {
          const query = search.toLowerCase();
          const matchesSearch =
            !query ||
            ["Device ID", "Room No.", "Room Name"].some((key) => String(device[key] || "").toLowerCase().includes(query));
          const matchesFilters = Object.entries(filters).every(([key, value]) => !value || device[key] === value);
          return matchesSearch && matchesFilters;
        })
        .sort((a, b) => (a["Device ID"] || "").localeCompare(b["Device ID"] || "", undefined, { numeric: true })),
    [devices, filters, search],
  );

  async function loadFile(file: File) {
    setLoadError(undefined);

    try {
      const savedMetadata = await saveExcelFile(file);
      const workbookState = await readWorkbookFile(file);
      setMetadata(savedMetadata);
      setState({ ...workbookState, metadata: savedMetadata });
      setDevices(workbookState.devices);
      setFilters({});
      setSearch("");
      setView("Dashboard");
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : "The selected Excel file could not be loaded.");
    }
  }

  async function removeDatabase() {
    setLoadError(undefined);

    try {
      await deleteSavedExcelFile();
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : "The saved Excel database could not be removed.");
      return;
    }

    setState(undefined);
    setDevices([]);
    setMetadata(undefined);
    setFilters({});
    setSearch("");
    setView("Dashboard");
  }

  function loadMockData() {
    const mockState: WorkbookState = {
      fileName: "Mock development data",
      sheetNames: ["MASTER BY ROOM"],
      devices: mockDevices,
      masterSheetName: "MASTER BY ROOM",
      loadedAt: new Date().toISOString(),
    };
    setState(mockState);
    setDevices(mockDevices);
    setMetadata(undefined);
    setLoadError(undefined);
  }

  function onUpdate(id: string, field: EditableField, value: string) {
    setDevices((previous) => previous.map((device) => (device.__rowId === id ? { ...device, [field]: value } : device)));
  }

  return (
    <main className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        <aside className="fixed inset-y-0 left-0 hidden w-72 border-r bg-card p-5 lg:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-red-600 p-2 text-white">
              <Flame />
            </div>
            <div>
              <h1 className="font-bold">Fire Alarm</h1>
              <p className="text-sm text-muted-foreground">Device Manager</p>
            </div>
          </div>
          <nav className="grid gap-2">
            {nav.map((item) => (
              <Button key={item} variant={view === item ? "default" : "ghost"} className="justify-start" onClick={() => setView(item)} disabled={!state}>
                {item}
              </Button>
            ))}
          </nav>
        </aside>

        <section className="lg:pl-72">
          <header className="sticky top-0 z-10 border-b bg-background/90 p-4 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold">{state ? view : "Load database"}</h2>
                <p className="text-sm text-muted-foreground">
                  {state ? `${state.fileName} · ${devices.length} devices · sheets: ${state.sheetNames.length}` : "Upload an Excel workbook to begin."}
                </p>
              </div>
              <Button variant="outline" onClick={() => setDark(!dark)}>
                {dark ? <Sun /> : <Moon />}
              </Button>
            </div>
          </header>

          <div className="space-y-5 p-4 lg:p-6">
            {persistenceWarning && <Alert tone="warning" message={persistenceWarning} />}
            {loadError && <Alert tone="error" message={loadError} action={<Button onClick={removeDatabase}>Remove database</Button>} />}
            {isLoadingSavedFile && <Card><CardContent className="p-6">Loading saved Excel database…</CardContent></Card>}

            {!isLoadingSavedFile && !state && (
              <Card className="mx-auto max-w-2xl">
                <CardHeader>
                  <CardTitle>Upload your fire alarm Excel database</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The workbook is stored in IndexedDB in this browser, so it can be automatically reloaded after refreshing the page.
                  </p>
                  <FileUploader onFileSelected={loadFile} />
                  <Button variant="secondary" onClick={loadMockData}>Use mock data for development</Button>
                </CardContent>
              </Card>
            )}

            {state && (
              <>
                <LoadedFileStatus metadata={metadata} onRemove={removeDatabase} onFileSelected={loadFile} />
                {view === "Dashboard" && <DashboardCards devices={devices} />}
                {view === "Master Table" && (
                  <>
                    <FiltersBar devices={devices} search={search} setSearch={setSearch} filters={filters} setFilters={setFilters} />
                    <DeviceTable devices={filtered} onUpdate={onUpdate} />
                  </>
                )}
                {view === "Programming View" && <ProgrammingList devices={filtered} onUpdate={onUpdate} />}
                {view === "Room View" && <RoomAccordion devices={filtered} />}
                {view === "QC" && <QCPanel devices={devices} />}
                {view === "Export" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Export updated workbook</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Exports a new Excel file, keeps original workbook sheets when available, updates MASTER BY ROOM, and adds EXPORT_LOG.
                      </p>
                      <ExportButton state={state} devices={devices} />
                    </CardContent>
                  </Card>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function Alert({ tone, message, action }: { tone: "warning" | "error"; message: string; action?: ReactNode }) {
  return (
    <div className={`flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4 ${tone === "error" ? "border-red-300 bg-red-50 text-red-900 dark:bg-red-950" : "border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950"}`}>
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-5 w-5" />
        <p>{message}</p>
      </div>
      {action}
    </div>
  );
}
