// export default Search;

import React from "react";
import styles from "./index.module.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { list } from "../../data/data.js";



import RecentCard from "../RecentCard/RecentCard";
const NewsPosts = list.slice(3);

const NewsSection: React.FC = () => {
  
  return (
    <div className={styles.bodyy}>
      <div className={styles.titleContainer}>
        <h2 className={styles.PropertiesTitle}>Latest Properties</h2>
        <div className={styles.titleDecoration}>
          <span className={styles.line}></span>
          <span className={styles.verticalLine}></span>
          <span className={styles.line}></span>
        </div>
      </div>

      <p className={styles.PropertiesDescription}>
        Here, we share important updates about upcoming property launches,
        exclusive deals, and special events. Be the first to
        <br />
        know about exciting new opportunities and get early access to our latest
        listings. Stay connected and never miss a chance to
        <br />
        find your dream property or take advantage of our exclusive promotions!
      </p>
      <div className={styles.cards}>
       
        <RecentCard posts={NewsPosts} />
      </div>
    </div>
  );
};

export default NewsSection;
