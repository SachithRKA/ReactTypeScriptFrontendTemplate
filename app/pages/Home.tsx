import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import BodySection from "./BodySection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <BodySection />
      <Footer />
    </main>
  );
}
