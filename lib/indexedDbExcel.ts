import type { ExcelFileMetadata } from "./types";

const DB_NAME = "fire-alarm-device-manager";
const DB_VERSION = 1;
const STORE_NAME = "excelFiles";
const RECORD_KEY = "current-master-workbook";

type SavedExcelRecord = ExcelFileMetadata & {
  id: typeof RECORD_KEY;
  fileBlob: Blob;
};

function ensureIndexedDb() {
  if (typeof window === "undefined" || !window.indexedDB) {
    throw new Error("IndexedDB is not available in this browser.");
  }
}

function openDatabase(): Promise<IDBDatabase> {
  ensureIndexedDb();

  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Unable to open IndexedDB."));
  });
}

function withStore<T>(mode: IDBTransactionMode, operation: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDatabase().then(
    (database) =>
      new Promise<T>((resolve, reject) => {
        const transaction = database.transaction(STORE_NAME, mode);
        const store = transaction.objectStore(STORE_NAME);
        const request = operation(store);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error ?? new Error("IndexedDB operation failed."));
        transaction.oncomplete = () => database.close();
        transaction.onerror = () => {
          database.close();
          reject(transaction.error ?? new Error("IndexedDB transaction failed."));
        };
        transaction.onabort = () => {
          database.close();
          reject(transaction.error ?? new Error("IndexedDB transaction was aborted."));
        };
      }),
  );
}

export async function saveExcelFile(file: File): Promise<ExcelFileMetadata> {
  const now = new Date().toISOString();
  const existing = await getSavedExcelMetadata().catch(() => undefined);
  const metadata: ExcelFileMetadata = {
    fileName: file.name,
    fileSize: file.size,
    uploadedAt: now,
    lastLoadedAt: now,
  };

  if (existing?.fileName === file.name && existing.fileSize === file.size) {
    metadata.uploadedAt = existing.uploadedAt;
  }

  const record: SavedExcelRecord = {
    id: RECORD_KEY,
    fileBlob: file,
    ...metadata,
  };

  await withStore("readwrite", (store) => store.put(record));
  return metadata;
}

export async function getSavedExcelFile(): Promise<File | undefined> {
  const record = await withStore<SavedExcelRecord | undefined>("readonly", (store) => store.get(RECORD_KEY));

  if (!record) {
    return undefined;
  }

  const lastLoadedAt = new Date().toISOString();
  await withStore("readwrite", (store) => store.put({ ...record, lastLoadedAt }));

  return new File([record.fileBlob], record.fileName, {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    lastModified: new Date(record.uploadedAt).getTime(),
  });
}

export async function deleteSavedExcelFile(): Promise<void> {
  await withStore("readwrite", (store) => store.delete(RECORD_KEY));
}

export async function getSavedExcelMetadata(): Promise<ExcelFileMetadata | undefined> {
  const record = await withStore<SavedExcelRecord | undefined>("readonly", (store) => store.get(RECORD_KEY));

  if (!record) {
    return undefined;
  }

  return {
    fileName: record.fileName,
    fileSize: record.fileSize,
    uploadedAt: record.uploadedAt,
    lastLoadedAt: record.lastLoadedAt,
  };
}

export function isIndexedDbAvailable() {
  return typeof window !== "undefined" && Boolean(window.indexedDB);
}
