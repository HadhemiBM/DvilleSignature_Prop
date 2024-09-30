"use client";

import React, { useState, useRef } from "react";

import styles from "./index.module.css";

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}

const Header: React.FC = () => {
  const carouselRef = useRef(null);
  const [areaFrom, setAreaFrom] = useState(200);
  const [areaTo, setAreaTo] = useState(700);
  const [priceFrom, setPriceFrom] = useState(200);
  const [priceTo, setPriceTo] = useState(700);

  const one =
    "https://res.cloudinary.com/dy5gov7fj/image/upload/v1727660139/5_tgb38q.jpg";
  const two =
    "https://res.cloudinary.com/dy5gov7fj/image/upload/v1727660193/homeBG_iccqsj.webp";
  const three =
    "https://res.cloudinary.com/dy5gov7fj/image/upload/v1727660197/3_kgxvmd.jpg";

  return (
    <div className={styles.container1}>
      <div className={styles.aa_header}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className="col-md-12">
              <div className={styles.aa_header_area}>
                <div className={styles.row}>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className={styles.aa_header_left}>
                      <div className={styles.aa_telephone_no}>
                        <i className="fa-solid fa-phone"></i>
                        +971 58 560 6752
                      </div>
                      <div className={(styles.aa_email, styles.hidden_xs)}>
                        <i className="fa-solid fa-envelope"></i>
                        info@Deville
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className={styles.aa_header_right}>
                      <a href="/signup" className={styles.aa_register}>
                        Register
                      </a>
                      <a href="/signin" className={styles.aa_login}>
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel section */}
      {/* <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <Image
              width={1000}
              height={700}
              alt="Slide 1"
              src={two}
              className="d-block w-100"
            />
            <div className={styles.ProductInfo}>
              <span className={styles.aa_top_slider_catg}>Duplex</span>
              <h2 className={styles.aa_top_slider_title}>1560 Square Feet</h2>
              <p className={styles.aa_top_slider_location}>
                <i className="fa-solid fa-location-dot"></i> Dubai, (UAE)
              </p>
              <span className={styles.aa_top_slider_off}>30% OFF</span>
              <p className={styles.aa_top_slider_price}>$460,000</p>
              <a href="#" className={styles.aa_top_slider_btn}>
                Read More
                <span
                  className={(styles.fa, styles.fa_angle_double_right)}
                ></span>
              </a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <Image
              width={1920}
              height={700}
              alt="Slide 2"
              src={one}
              className="d-block w-100"
            />
            <div className={styles.ProductInfo}>
              <span className={styles.aa_top_slider_catg}>Duplex</span>
              <h2 className={styles.aa_top_slider_title}>1560 Square Feet</h2>
              <p className={styles.aa_top_slider_location}>
                <i className="fa-solid fa-location-dot"></i> Dubai, (UAE)
              </p>
              <span className={styles.aa_top_slider_off}>30% OFF</span>
              <p className={styles.aa_top_slider_price}>$460,000</p>
              <a href="#" className={styles.aa_top_slider_btn}>
                Read More
                <span
                  className={(styles.fa, styles.fa_angle_double_right)}
                ></span>
              </a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <Image
              width={1920}
              height={700}
              alt="Slide 3"
              src={three}
              className="d-block w-100"
            />
            <div className={styles.ProductInfo}>
              <span className={styles.aa_top_slider_catg}>Duplex</span>
              <h2 className={styles.aa_top_slider_title}>1560 Square Feet</h2>
              <p className={styles.aa_top_slider_location}>
                <i className="fa-solid fa-location-dot"></i> Dubai, (UAE)
              </p>
              <span className={styles.aa_top_slider_off}>30% OFF</span>
              <p className={styles.aa_top_slider_price}>$460,000</p>
              <a href="#" className={styles.aa_top_slider_btn}>
                Read More
                <span
                  className={(styles.fa, styles.fa_angle_double_right)}
                ></span>
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        {/* <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> */}
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <Image
              width={1000}
              height={700}
              alt="Slide 1"
              src={two}
              className="d-block w-100"
            />
            <div className={styles.ProductInfo}>
              <span className={styles.aa_top_slider_catg}>Duplex</span>
              <h2 className={styles.aa_top_slider_title}>1560 Square Feet</h2>
              <p className={styles.aa_top_slider_location}>
                <i className="fa-solid fa-location-dot"></i> Dubai, (UAE)
              </p>
              <span className={styles.aa_top_slider_off}>30% OFF</span>
              <p className={styles.aa_top_slider_price}>$460,000</p>
              <a href="#" className={styles.aa_top_slider_btn}>
                Read More
                <span
                  className={`${styles.fa} ${styles.fa_angle_double_right}`}
                ></span>
              </a>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="4000">
            <Image
              width={1920}
              height={700}
              alt="Slide 2"
              src={one}
              className="d-block w-100"
            />
            <div className={styles.ProductInfo}>
              <span className={styles.aa_top_slider_catg}>Duplex</span>
              <h2 className={styles.aa_top_slider_title}>1560 Square Feet</h2>
              <p className={styles.aa_top_slider_location}>
                <i className="fa-solid fa-location-dot"></i> Dubai, (UAE)
              </p>
              <span className={styles.aa_top_slider_off}>30% OFF</span>
              <p className={styles.aa_top_slider_price}>$460,000</p>
              <a href="#" className={styles.aa_top_slider_btn}>
                Read More
                <span
                  className={`${styles.fa} ${styles.fa_angle_double_right}`}
                ></span>
              </a>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="4000">
            <Image
              width={1920}
              height={700}
              alt="Slide 3"
              src={three}
              className="d-block w-100"
            />
            <div className={styles.ProductInfo}>
              <span className={styles.aa_top_slider_catg}>Duplex</span>
              <h2 className={styles.aa_top_slider_title}>1560 Square Feet</h2>
              <p className={styles.aa_top_slider_location}>
                <i className="fa-solid fa-location-dot"></i> Dubai, (UAE)
              </p>
              <span className={styles.aa_top_slider_off}>30% OFF</span>
              <p className={styles.aa_top_slider_price}>$460,000</p>
              <a href="#" className={styles.aa_top_slider_btn}>
                Read More
                <span
                  className={`${styles.fa} ${styles.fa_angle_double_right}`}
                ></span>
              </a>
            </div>
          </div>
        </div>

        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>

      <div className={styles.SearchSection}>
        <div className={styles.bodyy}>
          <div className={styles.search_container}>
            <input
              type="text"
              placeholder="Type Your Location"
              className={styles.input_field}
            />
            <select className={styles.dropdown}>
              <option>Category</option>
              <option>House</option>
              <option>Apartment</option>
            </select>
            <select className={styles.dropdown}>
              <option>Rooms</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
            <select className={styles.dropdown}>
              <option>Type</option>
              <option>Sale</option>
              <option>Rent</option>
            </select>
            <button className={styles.search_btn}>SEARCH</button>
          </div>

          <div className={styles.range_container}>
            <div className={styles.range_slider}>
              <label>AREA (SQ)</label>
              <div className={styles.range}>
                <span>FROM</span>
                <input
                  type="range"
                  min={200}
                  max={700}
                  value={areaFrom}
                  onChange={(e) => setAreaFrom(Number(e.target.value))}
                  className={styles.slider}
                />
                <span>{areaFrom.toFixed(2)}</span>
                <span> TO</span>
                <input
                  type="range"
                  min={200}
                  max={700}
                  value={areaTo}
                  onChange={(e) => setAreaTo(Number(e.target.value))}
                  className={styles.slider}
                />
                <span>{areaTo.toFixed(2)}</span>
              </div>
            </div>

            <div className={styles.range_slider}>
              <label>PRICE ($)</label>
              <div className={styles.range}>
                <span>FROM</span>
                <input
                  type="range"
                  min={200}
                  max={700}
                  value={priceFrom}
                  onChange={(e) => setPriceFrom(Number(e.target.value))}
                  className={styles.slider}
                />
                <span>{priceFrom.toFixed(2)}</span>
                <span>TO</span>
                <input
                  type="range"
                  min={200}
                  max={700}
                  value={priceTo}
                  onChange={(e) => setPriceTo(Number(e.target.value))}
                  className={styles.slider}
                />
                <span>{priceTo.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
