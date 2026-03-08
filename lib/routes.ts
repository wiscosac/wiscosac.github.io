import { normalizePermalink } from "./content";

export function permalinkToSegments(permalink: string): string[] {
  const normalized = normalizePermalink(permalink);

  if (normalized === "/") return [];

  return normalized.split("/").filter(Boolean);
}

export function segmentsToPermalink(segments?: string[]): string {
  if (!segments || segments.length === 0) return "/";
  return "/" + segments.join("/");
}