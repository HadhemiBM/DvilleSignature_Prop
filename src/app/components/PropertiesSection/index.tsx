// export default Search;
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import AboutImg from "../../../img/gallery/AboutImage.jpg";
import I_370 from "../../../img/gallery/370_220Black.jpg";
const PropertiesSection: React.FC = () => {
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
        Browse our newest listings to find your ideal home.
        <br />
        From modern apartments to luxury villas, explore a range of options with
        detailed descriptions and images.
        <br />
        Don’t miss out on the latest properties on the market!
      </p>
      <div className={styles.cards}>
        <div className="card">
          <div className={styles.cardStatus}>
            <p className={styles.cardStatusP}>For Sale</p>
          </div>
          <Image className="card-img-top" src={I_370} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">5 Rooms 2 Beds 3 Baths 1100 SQ FT</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>Appartment Title</h3>
            </li>
            <li className="list-group-item">Description</li>
          </ul>
          <div className={styles.card_body}>
            <p className="card-text">$35000</p>
            <button className={styles.search_btn}>View Details</button>
          </div>
        </div>
        <div className="card">
          <div className={styles.cardStatus}>
            <p className={styles.cardStatusP}>For Sale</p>
          </div>
          <Image className="card-img-top" src={I_370} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">5 Rooms 2 Beds 3 Baths 1100 SQ FT</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>Appartment Title</h3>
            </li>
            <li className="list-group-item">Description</li>
          </ul>
          <div className={styles.card_body}>
            <p className="card-text">$35000</p>
            <button className={styles.search_btn}>View Details</button>
          </div>
        </div>
        <div className="card">
          <div className={styles.cardStatus}>
            <p className={styles.cardStatusP}>For Sale</p>
          </div>
          <Image className="card-img-top" src={I_370} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">5 Rooms 2 Beds 3 Baths 1100 SQ FT</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>Appartment Title</h3>
            </li>
            <li className="list-group-item">Description</li>
          </ul>
          <div className={styles.card_body}>
            <p className="card-text">$35000</p>
            <button className={styles.search_btn}>View Details</button>
          </div>
        </div>
      </div>

      <div className={styles.findProperty}>
        <h3>Find Your Best Property</h3>
        <button className={styles.ALL_btn}>View All Properties</button>
      </div>
    </div>
  );
};

export default PropertiesSection;
