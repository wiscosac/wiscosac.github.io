import Link from "next/link";
import { ContentItem, normalizePermalink } from "@/lib/content";
import { formatDate } from "@/lib/date";

export default function ContentList({
  items,
}: {
  items: ContentItem[];
}) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <article key={item.permalink} className="border-b pb-6">
          <h2 className="text-2xl font-semibold">
            <Link
              href={normalizePermalink(item.permalink)}
              className="hover:underline"
            >
              {item.title}
            </Link>
          </h2>

          {item.date && (
            <p className="mt-1 text-sm text-gray-500">
              {formatDate(item.date)}
            </p>
          )}

          {item.excerpt && <p className="mt-3">{item.excerpt}</p>}
        </article>
      ))}
    </div>
  );
}