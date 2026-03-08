import Footer from "@/components/Footer";
import Link from "next/link";
import JoinModal from "@/components/JoinModal";

export default function HomePage() {
  return (
    <div className="home-hero">
      <div className="home-overlay" />

      <div className="home-content">

        <h1 className="home-title">
          Sports Analytics Club
          <br />
          UW – Madison
        </h1>

        <p className="home-description">
          Providing students of all experience levels with the opportunity to
          complete meaningful research using data of any sport. Meetings will
          consist of workshops, guest speakers, presentation practice, and
          opportunities to start projects with a special emphasis on major
          competitions in sports analytics.
        </p>
        <br/><br/>
      
        <JoinModal />
      </div>
    <Footer/>
    </div>
  );
}