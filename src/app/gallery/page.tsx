"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import tt from "../../img/gallery/woman.jpg";
import I_370 from "../../img/gallery/370_220.jpg";
import Image from "next/image";
const Gallery: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className={styles.blackDiv}></div>
      <div className={styles.AboutUS}>
        {/* <h2 className={styles.AboutUSTitle}>About Us</h2>
        <span className={styles.spanTitle}></span> */}
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
