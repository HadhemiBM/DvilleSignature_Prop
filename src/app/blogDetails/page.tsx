"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import I_920 from "../../img/gallery/1920_1280.jpg";
import Image from "next/image";

const blogDetails: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "nom.",
      description: "description.",
      date: "28 Aout, 2024",
      role: "Admin",
      comments: 6,
    },
  ];

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
              {blogPosts.map((post) => (
                <div key={post.id} className={styles.card}>
                  <div className={styles.cardStatus}>
                    <p className={styles.cardStatusP}>{post.date}</p>
                  </div>
                  <Image
                    className={styles.card_img_top}
                    src={I_920}
                    alt="Card image cap"
                  />
                  <ul className="list-group list-group-flush">
                    <li className={styles.listGroupItem}>
                      <h2>{post.title}</h2>
                    </li>
                  </ul>
                  <div className={styles.card_body}>
                    <p className="card-Role">
                      <i className="fa-solid fa-user"></i> {post.role}
                    </p>
                    <p className="card-comment">
                      <i className="fa-solid fa-comment"></i> {post.comments}
                    </p>
                  </div>
                  <li className="list-group-item">{post.description}</li>
                  <div className={styles.card_footer}>
                    <span className={styles.verticalLine}></span>
                    <p>Owner.</p>
                  </div>
                </div>
              ))}
            </div>
            <div 
              className={styles.comments}
            >

              

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

export default blogDetails;
