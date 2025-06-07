import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getExcerpt(body: string, maxLength = 50) {
  if (!body) return '';
  if (body.length <= maxLength) return body;
  return body.slice(0, maxLength).trim() + '...';
}