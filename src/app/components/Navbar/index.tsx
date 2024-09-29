"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: "/", name: "ACCEUIL" },
    { id: 2, link: "./properties", name: "PROPERTIES" },
    { id: 3, link: "./gallery", name: "GALLERY" },
    { id: 4, link: "./blog", name: "BLOG" },
    { id: 5, link: "/contact", name: "CONTACT" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <a href="/" className={styles.navbarLogoText}>
          Deville Signature
          <span className={styles.navbarLogoTextSpan}> Properties</span>
        </a>

        <div className={styles.navbarLinksContainer}>
          {links.map(({ id, link, name }) => (
            <h3
              key={id}
              className={`${styles.navbarLink} ${
                pathname === link ? styles.activeLink : ""
              }`}
            >
              <Link href={link}>{name}</Link>
            </h3>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
