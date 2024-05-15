"use client";

import Image from "next/image";
import Header from "@/components/homepage/Header";

import Footer from "@/components/homepage/Footer";
import Head from "next/head";
import DigitalAssets from "@/components/homepage/DigitalAssets";
import About from "@/components/homepage/About";
import Crypto from "@/components/homepage/Crypto";
import Team from "@/components/homepage/Team";
import Divider from "@/components/homepage/Divider";
import NewsLetter from "@/components/newsletter/newsletter";
import { useEffect, useState } from "react";

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
