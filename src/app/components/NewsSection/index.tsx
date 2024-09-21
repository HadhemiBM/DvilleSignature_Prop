// export default Search;
import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AboutImg from "../../../img/gallery/AboutImage.jpg";
import I_360 from "../../../img/gallery/360_240.jpg";
const NewsSection: React.FC = () => {
  return (
    <div className={styles.bodyy}>
      <div className={styles.titleContainer}>
        <h2 className={styles.PropertiesTitle}>Latest News</h2>
        <div className={styles.titleDecoration}>
          <span className={styles.line}></span>
          <span className={styles.verticalLine}></span>
          <span className={styles.line}></span>
        </div>
      </div>

      <p className={styles.PropertiesDescription}>
        Our "Latest News" section is your go-to source for the latest
        announcements and special offers.
        <br />
        Here, we share important updates about upcoming property launches,
        exclusive deals, and special events. Be the first to
        <br />
        know about exciting new opportunities and get early access to our latest
        listings. Stay connected and never miss a chance to
        <br />
        find your dream property or take advantage of our exclusive promotions!
      </p>
      <div className={styles.cards}>
        <div className="card">
          <div className={styles.cardStatus}>
            <p className={styles.cardStatusP}>28 Aout, 2024</p>
          </div>
          <Image className="card-img-top" src={I_360} alt="Card image cap" />

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>nom.</h3>
            </li>
            <li className="list-group-item">description.</li>
          </ul>
          <div className={styles.card_body}>
            <p className="card-Role">
              <span className={styles.fa_role_o}></span> Admin
            </p>
            <p className="card-comment">
              <span className={styles.fa_comment_o}></span> 6
            </p>
          </div>
        </div>
        <div className="card">
          <div className={styles.cardStatus}>
            <p className={styles.cardStatusP}>28 Aout, 2024</p>
          </div>
          <Image className="card-img-top" src={I_360} alt="Card image cap" />

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>nom.</h3>
            </li>
            <li className="list-group-item">description.</li>
          </ul>
          <div className={styles.card_body}>
            <p className="card-Role">
              <span className={styles.fa_role_o}></span> Admin
            </p>
            <p className="card-comment">
              <span className={styles.fa_comment_o}></span> 6
            </p>
          </div>
        </div>
        <div className="card">
          <div className={styles.cardStatus}>
            <p className={styles.cardStatusP}>28 Aout, 2024</p>
          </div>
          <Image className="card-img-top" src={I_360} alt="Card image cap" />

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>nom.</h3>
            </li>
            <li className="list-group-item">description.</li>
          </ul>
          <div className={styles.card_body}>
            <p className="card-Role">
              <span className={styles.fa_role_o}></span> Admin
            </p>
            <p className="card-comment">
              <span className={styles.fa_comment_o}></span> 6
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
