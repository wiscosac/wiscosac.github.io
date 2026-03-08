import Link from "next/link";
import CategoryHero from "@/components/CategoryHero";
import { getAllContent, normalizePermalink } from "@/lib/content";
import { formatDate } from "@/lib/date";

export default async function ProjectsPage() {
  const all = await getAllContent();

  const projects = all
    .filter((item) =>
      normalizePermalink(item.permalink).startsWith("/projects/")
    )
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(String(b.date)).getTime() - new Date(String(a.date)).getTime();
    });

  return (
    <CategoryHero title="Projects" backgroundImage="/images/bg-2.jpg">
      <div className="category-list">
        {projects.map((item) => (
          <article key={item.permalink} className="category-list__item">
            <h2 className="category-list__title">
              <Link href={normalizePermalink(item.permalink)}>
                {item.title}
              </Link>
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