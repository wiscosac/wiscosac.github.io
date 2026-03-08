import { ReactNode } from "react";
import Footer from "@/components/Footer";

type CategoryHeroProps = {
  title: string;
  children: ReactNode;
  backgroundImage?: string;
};

export default function CategoryHero({
  title,
  children,
  backgroundImage = "/images/home-bg.jpg",
}: CategoryHeroProps) {
  return (
    <div
      className="category-hero"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="category-hero__overlay" />

      <section className="category-hero__inner content-page">
        <div className="category-hero__content">
          <h1 className="category-hero__title">{title}</h1>
          {children}
        </div>
      </section>
<br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}