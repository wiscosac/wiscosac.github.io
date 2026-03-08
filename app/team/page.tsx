import Footer from "@/components/Footer";
import TeamGrid from "@/components/TeamGrid";

export default function TeamPage() {
  return (
    <div>
    <section className="content-page">
      <h1 className="page-title">Leadership Team</h1>
      <TeamGrid />
      
    </section>
    <Footer/>
    </div>
  );
}