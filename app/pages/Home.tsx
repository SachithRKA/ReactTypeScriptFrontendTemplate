import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BodySection from "../components/BodySection";
import React from "react";

export default function HomePage() {
  return (
    <main>
      <Header />
      <BodySection />
      <Footer />
    </main>
  );
}
