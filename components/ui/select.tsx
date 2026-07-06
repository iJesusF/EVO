import * as React from "react"; import { cn } from "@/lib/utils";
export function Select({className,...p}:React.SelectHTMLAttributes<HTMLSelectElement>){return <select className={cn("h-10 rounded-md border border-input bg-background px-3 py-2 text-sm",className)} {...p}/>}
