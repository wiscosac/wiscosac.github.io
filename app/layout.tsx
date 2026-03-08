import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Sports Analytics Club, UW - Madison",
  description: "Publishing analytical, data driven insights of sports today",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}