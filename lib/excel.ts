import * as XLSX from "xlsx";
import { deviceColumns, type FireAlarmDevice, type WorkbookState } from "./types";

const MASTER = "MASTER BY ROOM";
function normalizeRow(row: Record<string, unknown>, index: number): FireAlarmDevice {
  const device = { __rowId: `${row["Device ID"] || "device"}-${index}`, __rowIndex: index + 2 } as FireAlarmDevice;
  deviceColumns.forEach((column) => { device[column] = row[column] == null ? "" : String(row[column]); });
  Object.entries(row).forEach(([key, value]) => { if (!(key in device)) device[key] = value == null ? "" : String(value); });
  return device;
}
export async function readWorkbookFile(file: File): Promise<WorkbookState> {
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data, { type: "array", cellDates: true });
  const masterSheetName = workbook.SheetNames.includes(MASTER) ? MASTER : workbook.SheetNames[0];
  const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(workbook.Sheets[masterSheetName], { defval: "" });
  return { fileName: file.name, sheetNames: workbook.SheetNames, devices: rows.map(normalizeRow), workbook, masterSheetName, loadedAt: new Date().toISOString() };
}
export function exportWorkbook(state: WorkbookState, devices: FireAlarmDevice[]) {
  const workbook = state.workbook ? XLSX.utils.book_new() : XLSX.utils.book_new();
  if (state.workbook) {
    state.workbook.SheetNames.forEach((sheetName) => {
      if (sheetName !== state.masterSheetName && sheetName !== "EXPORT_LOG") XLSX.utils.book_append_sheet(workbook, state.workbook!.Sheets[sheetName], sheetName);
    });
  }
  const rows = devices.map(({ __rowId, __rowIndex, ...device }) => device);
  const masterSheet = XLSX.utils.json_to_sheet(rows, { header: deviceColumns as unknown as string[] });
  XLSX.utils.book_append_sheet(workbook, masterSheet, state.masterSheetName || MASTER);
  const logSheet = XLSX.utils.json_to_sheet([{ "Exported At": new Date().toLocaleString(), "Source File": state.fileName, "Device Count": devices.length }]);
  XLSX.utils.book_append_sheet(workbook, logSheet, "EXPORT_LOG");
  XLSX.writeFile(workbook, `${state.fileName.replace(/\.xlsx$/i, "") || "fire_alarm_devices"}_updated.xlsx`);
}
