"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";
import "./globals.css";
import Header from "./components/Header/page";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import PropertiesSection from "./components/PropertiesSection";
import NewsSection from "./components/NewsSection";
// import Search from "./components/Search";

export default function Home() {


  return (
    <div className={styles.Page}>
      <Header />
      <AboutSection />
      <PropertiesSection />
      <NewsSection />
    </div>

    // </div>
  );
}
