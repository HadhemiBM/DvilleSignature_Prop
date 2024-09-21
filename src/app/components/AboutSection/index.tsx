// export default Search;
import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import AboutImg from "../../../img/gallery/AboutImage.jpg";
const AboutSection: React.FC = () => {
  return (
    <div className={styles.bodyy}>
      <div className={styles.ImageContainer}>
        <Image alt="About Us" src={AboutImg} className={styles.Image} />
      </div>
      <div className={styles.AboutUS}>
        {/* <h2 className={styles.AboutUSTitle}>About Us</h2>
        <span className={styles.spanTitle}></span> */}
        <div className={styles.titleContainer}>
          <h2 className={styles.AboutUSTitle}>About Us</h2>
          <div className={styles.titleDecoration}>
            <span className={styles.line}></span>
            <span className={styles.verticalLine}></span>
            <span className={styles.line}></span>
          </div>
        </div>

        <p className={styles.AboutUsDescription}>
          Your premier partner in discovering the perfect home or investment
          opportunity. Our passion for real estate shines through in our
          unwavering commitment to delivering exceptional service. <br />
          We expertly guide you through every step of your property journey,
          whether you're buying, selling, or renting.
          <br /> With a team of seasoned professionals, we provide tailored
          solutions and insightful market expertise to meet your unique needs.{" "}
          <br />
          At Deville Signature Properties, we don’t just find properties; we
          help you find your dream home, where every detail is catered to with
          integrity and dedication.
          <br /> Experience the difference with us, and let us help you turn
          your property dreams into reality.
        </p>

        <p className={styles.AboutUsDescriptionName}> &bull; chadha</p>
        <p className={styles.AboutUsDescriptionName}> &bull; Malika</p>
      </div>
    </div>
  );
};

export default AboutSection;
