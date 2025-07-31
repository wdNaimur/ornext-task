import React from "react";
import PlanSection from "./components/PlanSection";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustedSection from "./components/TrustedSection";

function HomePage() {
  return (
    <div className="font-archivo bg-secondary">
      <Navbar />
      <main className="min-h-screen pt-17">
        <section>
          <HeroSection />
        </section>
        <section>
          <TrustedSection />
        </section>
        <section>
          <PlanSection />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
