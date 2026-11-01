import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Gabungkan kelas Tailwind, kelas yang bentrok dimenangkan yang terakhir
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
