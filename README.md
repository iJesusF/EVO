# Fire Alarm Device Manager

A client-side Next.js application for importing, reviewing, editing, and exporting an Excel fire-alarm device schedule. It is designed for Vercel deployment and uses an Excel workbook as the initial data source without a backend database.

## Features

- Upload `.xlsx` workbooks such as `Level_02_Fire_Alarm_Master_Device_Schedule.xlsx`.
- Persists the uploaded workbook in browser IndexedDB so the database reloads automatically after refresh.
- Stores workbook metadata: file name, file size, upload date, and last loaded date.
- Reads all workbook sheets and uses `MASTER BY ROOM` as the primary device table when present.
- Converts the master sheet to browser-memory JSON.
- Works if expected columns are missing by filling blank values in the UI model.
- Interactive views:
  - Dashboard metrics for totals, type, area, status, and QC review counts.
  - Master Table with search, filters, ascending Device ID sorting, and editable fields.
  - Programming View sorted by Loop and Device ID with a quick Programmed action.
  - Room View grouped by Room No. and Room Name.
  - QC View for review confidence, missing room numbers, duplicate Device IDs, and missing device types.
  - Export View to download an updated workbook.
- Excel export updates `MASTER BY ROOM` and creates an `EXPORT_LOG` sheet with export metadata.
- Mock data is included for development before uploading a workbook.
- Dark mode toggle.

## Tech Stack

- Next.js App Router
- TypeScript
- TailwindCSS
- shadcn/ui-inspired local components
- `xlsx` for Excel import/export
- IndexedDB for local workbook persistence
- No database and no server-side file storage

## Local Development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Keep the default Next.js framework settings.
4. Deploy.

No environment variables are required because all Excel processing and IndexedDB persistence are client-side.

## Local Persistence Behavior

- When a user uploads an Excel workbook, the original `File` is saved into IndexedDB under a single current database record.
- Uploading another workbook replaces the previous saved workbook and reloads the in-memory data.
- Refreshing or reopening the app automatically loads the saved workbook if IndexedDB is available.
- The Loaded File Status panel displays file name, upload date, last loaded date, and file size.
- The **Remove database** action deletes the IndexedDB record and clears in-memory device data.
- If IndexedDB is unavailable, the app remains usable for the current session but warns that persistence is disabled.
- If the stored workbook cannot be parsed, the app shows an error and lets the user remove the corrupted saved database.

## Expected Excel Sheets

The app preserves workbook sheets when exporting where possible and expects, but does not require, sheets such as:

- `MASTER BY ROOM`
- `PROGRAMMING LIST`
- `AREA A` through `AREA F`
- `DEVICE TYPE`
- `SUMMARY`
- `QC OBSERVATIONS`

## Expected Master Columns

- Level
- Area
- Drawing
- Room No.
- Room Name
- Device ID
- Device Type
- Model
- Mount
- Loop
- FP
- NAC
- Programming Order
- Programming Notes
- Status
- Confidence
- Verified
- Commissioning Notes
- Observations

Editable fields are `Status`, `Confidence`, `Verified`, `Programming Notes`, `Commissioning Notes`, and `Observations`.

## Future Supabase Migration

The app keeps clear TypeScript device types and isolates Excel parsing/exporting in `lib/excel.ts`. IndexedDB persistence lives in `lib/indexedDbExcel.ts`, so a future Supabase migration can replace local persistence with a repository/service layer that reads and writes device records while preserving the existing UI components.
