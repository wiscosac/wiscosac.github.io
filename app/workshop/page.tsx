import Link from "next/link";
import CategoryHero from "@/components/CategoryHero";
import { getAllContent, normalizePermalink } from "@/lib/content";
import { formatDate } from "@/lib/date";

export default async function WorkshopIndexPage() {
  const all = await getAllContent();

  const workshops = all
    .filter((item) => {
      const permalink = normalizePermalink(item.permalink);
      return (
        permalink.startsWith("/workshop/") ||
        permalink.startsWith("/Challenge/")
      );
    })
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(String(b.date)).getTime() - new Date(String(a.date)).getTime();
    });

  return (
    <CategoryHero
      title="Workshops and Challenges"
      backgroundImage="/images/bg-3.jpg"
    >
      <div className="category-list">
        {workshops.map((item) => (
          <article key={item.permalink} className="category-list__item">
            <h2 className="category-list__title">
              <a href={normalizePermalink(item.permalink)}>{item.title}</a>
            </h2>

            {item.date && (
              <p className="category-list__meta">{formatDate(item.date)}</p>
            )}

            {item.excerpt && (
              <p className="category-list__excerpt">{item.excerpt}</p>
            )}
          </article>
        ))}
      </div>
    </CategoryHero>
  );
}