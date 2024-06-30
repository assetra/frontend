import About from "@/components/homepage/About";
import Footer from "@/components/homepage/Footer";
import Team from "@/components/homepage/Team";
import Crypto from "@/components/homepage/Crypto";
import Hero from "@/components/homepage/Hero";
import PopUp from "@/components/homepage/PopUp";

export default function Home() {
  return (
    <>
      <main className="pt-16 mx-auto bg-black">
        <PopUp />
        <Hero />
        <About />
        <Crypto />
        <Team />
      </main>
      <Footer />
    </>
  );
}
