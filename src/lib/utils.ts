import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createSlug(name: string) {
  if (!name) return '';
  return name
    .toLowerCase()
    .normalize('NFKD') // Decompose special characters
    .replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]/g, "'") // Normalize typographic apostrophes to straight apostrophe
    .replace(/['"`’]/g, "") // Remove all types of quotes
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphen
    .replace(/^-+|-+$/g, ""); // Trim leading/trailing hyphens
}