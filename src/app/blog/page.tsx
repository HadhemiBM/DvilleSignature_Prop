"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import tt from "../../img/gallery/woman.jpg";
import I_360 from "../../img/gallery/360_240.jpg";
import Image from "next/image";

const Blog: React.FC = () => {
  return (
    <>
      <div className={styles.blackDiv}></div>
      <div className={styles.container}>
        <div className={styles.Search}>
          <input
            type="text"
            placeholder="Search"
            className={styles.SearchInput}
          />
          <button className={styles.SearchBtn}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className={styles.blogs}>
          <div className={styles.Gallery}>
            <div className={styles.cards}>
              <div className="card">
                <div className={styles.cardStatus}>
                  <p className={styles.cardStatusP}>28 Aout, 2024</p>
                </div>
                <Image
                  className="card-img-top"
                  src={I_360}
                  alt="Card image cap"
                />

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
                    <i className="fa-solid fa-comment"></i> 6
                  </p>
                </div>
              </div>
              <div className="card">
                <div className={styles.cardStatus}>
                  <p className={styles.cardStatusP}>28 Aout, 2024</p>
                </div>
                <Image
                  className="card-img-top"
                  src={I_360}
                  alt="Card image cap"
                />

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h3>nom.</h3>
                  </li>
                  <li className="list-group-item">description.</li>
                </ul>
                <div className={styles.card_body}>
                  <p className="card-Role">
                    {/* <span className={styles.fa_role_o}></span> Admin */}
                    <i className="fa-solid fa-user"></i> User
                  </p>
                  <p className="card-comment">
                    <i className="fa-solid fa-comment"></i> 6
                  </p>
                </div>
              </div>
              <div className="card">
                <div className={styles.cardStatus}>
                  <p className={styles.cardStatusP}>28 Aout, 2024</p>
                </div>
                <Image
                  className="card-img-top"
                  src={I_360}
                  alt="Card image cap"
                />

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
                    <i className="fa-solid fa-comment"></i> 6
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.cards}>
              <div className="card">
                <div className={styles.cardStatus}>
                  <p className={styles.cardStatusP}>28 Aout, 2024</p>
                </div>
                <Image
                  className="card-img-top"
                  src={I_360}
                  alt="Card image cap"
                />

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
                    <i className="fa-solid fa-comment"></i> 6
                  </p>
                </div>
              </div>
              <div className="card">
                <div className={styles.cardStatus}>
                  <p className={styles.cardStatusP}>28 Aout, 2024</p>
                </div>
                <Image
                  className="card-img-top"
                  src={I_360}
                  alt="Card image cap"
                />

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h3>nom.</h3>
                  </li>
                  <li className="list-group-item">description.</li>
                </ul>
                <div className={styles.card_body}>
                  <p className="card-Role">
                    {/* <span className={styles.fa_role_o}></span> Admin */}
                    <i className="fa-solid fa-user"></i> User
                  </p>
                  <p className="card-comment">
                    <i className="fa-solid fa-comment"></i> 6
                  </p>
                </div>
              </div>
              <div className="card">
                <div className={styles.cardStatus}>
                  <p className={styles.cardStatusP}>28 Aout, 2024</p>
                </div>
                <Image
                  className="card-img-top"
                  src={I_360}
                  alt="Card image cap"
                />

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
                    <i className="fa-solid fa-comment"></i> 6
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.choices}>
            <div className={styles.categories}>
              <h3>Categories</h3>
              <ul className={styles.categoryList}>
                <li>
                  <span>Properties</span>
                  <span>1500</span>
                </li>
                <li>
                  <span>Apartment</span>
                  <span>5000</span>
                </li>
                <li>
                  <span>Office</span>
                  <span>3000</span>
                </li>
                <li>
                  <span>Residential</span>
                  <span>4500</span>
                </li>
                <li>
                  <span>Commercial</span>
                  <span>1000</span>
                </li>
                <ul>
                  <li>
                    <span>Category 2.1</span>
                    <span>50</span>
                  </li>
                  <li>
                    <span>Category 2.2</span>
                    <span>100</span>
                  </li>
                </ul>
                <li>
                  <span>Villa</span>
                  <span>800</span>
                </li>
                <li>
                  <span>Bungalow</span>
                  <span>200</span>
                </li>
              </ul>
            </div>

            <div className={styles.tags}>
              <h3>Tags</h3>
              <div className={styles.tagList}>
                <span>Apartment</span>
                <span>Property</span>
                <span>Residential</span>
                <span>Commercial</span>
                <span>Office</span>
                <span>Rent</span>
                <span>Sale</span>
                <span>Villa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
