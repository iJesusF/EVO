"use client";
import { Download } from "lucide-react"; import { exportWorkbook } from "@/lib/excel"; import type { FireAlarmDevice, WorkbookState } from "@/lib/types"; import { Button } from "./ui/button";
export function ExportButton({state,devices}:{state:WorkbookState;devices:FireAlarmDevice[]}){return <Button onClick={()=>exportWorkbook(state,devices)} className="gap-2"><Download className="h-4 w-4"/>Download updated Excel</Button>}
