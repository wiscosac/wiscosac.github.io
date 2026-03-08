import { notFound } from "next/navigation";
import { getAllContent, getContentByPermalink } from "@/lib/content";
import { permalinkToSegments, segmentsToPermalink } from "@/lib/routes";
import { formatDate } from "@/lib/date";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const all = await getAllContent();

  return all
    .filter((item) => normalizeForCompare(item.permalink) !== "/")
    .map((item) => ({
      slug: permalinkToSegments(item.permalink),
    }));
}

function normalizeForCompare(permalink: string) {
  let p = permalink.trim();
  if (!p.startsWith("/")) p = `/${p}`;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug ?? [];
  const permalink = segmentsToPermalink(slug);

  const item = await getContentByPermalink(permalink);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
  <article className="content-page flex-1">
    <h1 className="page-title">{item.title}</h1>

    {item.date && (
      <p className="meta">
        {formatDate(item.date)}
      </p>
    )}

    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: item.contentHtml }}
    />
   
  </article>
   <Footer/>
  </div>
);
}

