import About from "@/components/homepage/About";
import DigitalAssets from "@/components/homepage/DigitalAssets";
import Divider from "@/components/homepage/Divider";
import Footer from "@/components/homepage/Footer";
import Team from "@/components/homepage/Team";
import Crypto from "@/components/homepage/Crypto";

export default function Home() {
  return (
    <>
      <DigitalAssets />
      <Divider />
      <About />
      <Crypto />
      <Team />
      <Footer />
    </>
  );
}
