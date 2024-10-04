"use client";

import React from "react";
import styles from "./index.module.css";

import I_370 from "../../img/gallery/370_220.jpg";
import Image from "next/image";
const Gallery: React.FC = () => {


  return (
    <>
      <div className={styles.blackDiv}></div>
      <div className={styles.AboutUS}>
      
        <div className={styles.titleContainer}>
          <h2 className={styles.AboutUSTitle}>Gallery View</h2>
          <div className={styles.titleDecoration}>
            <span className={styles.line}></span>
            <span className={styles.verticalLine}></span>
            <span className={styles.line}></span>
          </div>
        </div>

        <p className={styles.GalleryDescription}>
          Explore our exclusive collection of stunning properties through our
          gallery. Each image captures the essence of luxurious living with
          <br />
          attention to detail and design. From modern apartments to spacious
          villas, take a visual journey through properties that blend style,
          <br />
          comfort, and elegance.
        </p>
      </div>
      <div className={styles.tagList}>
        <span>All</span>
        <span>Apartment</span>
        <span>Living Room</span>
        <span>Bedroom</span>
        <span>Kitchen</span>
        <span>Garage</span>
      </div>
      <div className={styles.gallery}>
  {[...Array(12)].map((_, i) => (
    <div className={styles.galleryItem} key={i}>
      <Image src={I_370} alt={`Gallery Image ${i + 1}`} />
    </div>
  ))}
</div>

    </>
  );
};

export default Gallery;
