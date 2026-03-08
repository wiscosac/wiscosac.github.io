import CalendarPageContent from "@/components/CalendarPageContent";
import Footer from "@/components/Footer";

export default function CalendarPage() {
  return (
    <div>
    <section className="content-page">
      <h1 className="page-title">Calendar</h1>
      <CalendarPageContent />
      
    </section>
    <Footer />
    </div>
  );
}