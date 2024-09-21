"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";
import "./globals.css";
import Header from "./components/Header/page";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
// import Search from "./components/Search";

export default function Home() {
  const pathname = usePathname();

  const links = [
    { id: 1, link: "/", name: "Accueil" },
    { id: 2, link: "/sigin", name: "About" },
    { id: 3, link: "#services", name: "Services" },
    { id: 4, link: "#contact", name: "Contact" },
  ];

  return (
    <div className={styles.Page}>
      <Header />
      <AboutSection />
    </div>

    // </div>
  );
}
