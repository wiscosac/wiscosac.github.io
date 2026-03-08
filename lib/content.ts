import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export type ContentItem = {
  sourceCollection: "pages" | "meetings" | "projects" | "workshops";
  sourceFile: string;
  title: string;
  date?: string;
  permalink: string;
  excerpt?: string;
  tags?: string | string[];
  type?: string;
  venue?: string;
  location?: string;
  contentHtml: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");
const COLLECTIONS = ["pages", "meetings", "projects", "workshops"] as const;

async function markdownToHtml(markdown: string) {
  const result = await remark().use(gfm).use(html).process(markdown);
  return result.toString();
}

function getMarkdownFiles(dir: string): string[] {
  const fullDir = path.join(CONTENT_ROOT, dir);

  if (!fs.existsSync(fullDir)) return [];

  const results: string[] = [];

  function walk(currentDir: string, baseDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath, baseDir);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        results.push(path.relative(baseDir, fullPath));
      }
    }
  }

  walk(fullDir, fullDir);
  return results;
}

export async function getAllContent(): Promise<ContentItem[]> {
  const results: ContentItem[] = [];

  for (const collection of COLLECTIONS) {
    const files = getMarkdownFiles(collection);

    for (const file of files) {
      const fullPath = path.join(CONTENT_ROOT, collection, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);
      const contentHtml = await markdownToHtml(content);

      if (!data.permalink) {
        throw new Error(
          `Missing permalink in ${collection}/${file}. This preserved-slug setup requires every file to have a permalink.`
        );
      }

      results.push({
        sourceCollection: collection,
        sourceFile: file,
        title: data.title ?? "",
        date: data.date ? String(data.date) : undefined,
        permalink: String(data.permalink),
        excerpt: data.excerpt,
        tags: data.tags,
        type: data.type,
        venue: data.venue,
        location: data.location,
        contentHtml,
      });
    }
  }

  return results;
}

export function normalizePermalink(permalink: string) {
  let p = permalink.trim();

  if (!p.startsWith("/")) p = `/${p}`;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);

  return p;
}

export async function getContentByPermalink(
  permalink: string
): Promise<ContentItem | null> {
  const all = await getAllContent();
  const normalizedTarget = normalizePermalink(permalink);

  return (
    all.find((item) => normalizePermalink(item.permalink) === normalizedTarget) ??
    null
  );
}