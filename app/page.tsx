"use client";
import { useEffect, useState } from "react";

import DigitalAssets from "@/components/homepage/DigitalAssets";
import Divider from "@/components/homepage/Divider";
import About from "@/components/homepage/About";
import Crypto from "@/components/homepage/Crypto";
import Team from "@/components/homepage/Team";
import Footer from "@/components/homepage/Footer";
import NewsLetter from "@/components/homepage/NewsLetter";

export default function Home() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 3000);
  }, []);
  return (
    <>
      <DigitalAssets />
      <Divider />
      <About />
      <Crypto />
      <Team />
      <Footer />
      <NewsLetter open={open} setOpen={() => setOpen(false)} />
    </>
  );
}
