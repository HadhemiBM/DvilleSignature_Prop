"use client";

import React from "react";
import styles from "./index.module.css";
import { featured } from "../../data/data";


// Define the type for each featured item
type FeaturedItem = {
  cover: string;
  name: string;
  total: string;
};

const PropertiesSection: React.FC = () => {

  return (
    <div className={styles.bodyy}>
      <div className={styles.titleContainer}>
        <h2 className={styles.PropertiesTitle}>Property Types</h2>
        <div className={styles.titleDecoration}>
          <span className={styles.line}></span>
          <span className={styles.verticalLine}></span>
          <span className={styles.line}></span>
        </div>
      </div>

      <p className={styles.PropertiesDescription}>
        Browse our categories to find your ideal home.
        <br />
        From modern apartments to luxury villas, explore a range of options with
        detailed descriptions and images.
        <br />
        Don’t miss out on the latest properties on the market!
      </p>

      <div className={styles.gridContainer}>
        {featured.map((item: FeaturedItem, index) => (
          <div className={styles.box} key={index}>
            <img src={item.cover} alt={item.name} className={styles.image} />
            <h4 className={styles.name}>{item.name}</h4>
            <label className={styles.total}>{item.total}</label>
          </div>
        ))}
      </div>

      <div className={styles.findProperty}>
        <h3>Find Your Best Property</h3>
        <button className={styles.ALL_btn}>View All Properties</button>
      </div>
    </div>
  );
};

export default PropertiesSection;
