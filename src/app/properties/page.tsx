"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import I_370 from "../../img/gallery/370_220.jpg";
import Image from "next/image";
import Link from "next/link";

const Properties: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const blogPosts = [
    {
      id: 1,
      title: "nom.",
      description: "description.",
      date: "28 Aout, 2024",
      role: "Admin",
      comments: 6,
    },
    {
      id: 2,
      title: "nom.",
      description: "description.",
      date: "28 Aout, 2024",
      role: "User",
      comments: 6,
    },
    {
      id: 3,
      title: "title.",
      description: "description.",
      date: "28 Aout, 2024",
      role: "Admin",
      comments: 6,
    },
    {
      id: 4,
      title: "titre.",
      description: "description.",
      date: "28 Aout, 2024",
      role: "Admin",
      comments: 6,
    },
    {
      id: 5,
      title: "nom.",
      description: "description.",
      date: "28 Aout, 2024",
      role: "User",
      comments: 6,
    },
    {
      id: 6,
      title: "nom.",
      description: "description.",
      date: "28 Aout, 2024",
      role: "Admin",
      comments: 6,
    },
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
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
              <div className={styles.card}>
                <div className={styles.cardStatus}>
                  <p className={styles.cardStatusP}>For Sale</p>
                </div>
                {/* <Image
                  className={styles.cardImage}
                  src={I_370}
                  alt="Card image cap"
                /> */}
                <div className={styles.cardBody}>
                  <p className={styles.cardText}>
                    5 Rooms 2 Beds 3 Baths 1100 SQ FT
                  </p>
                </div>
                <ul className={styles.listGroup}>
                  <li className={styles.listGroupItem}>
                    <h3>Appartment Title</h3>
                    <p>Description</p>
                  </li>
                </ul>
                <div className={styles.cardFooter}>
                  <p className={styles.cardPrice}>$35000</p>
                  <button className={styles.detailsBtn}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardStatus}>
                  <p className={styles.cardStatusP}>For Sale</p>
                </div>
                {/* <Image
                  className={styles.cardImage}
                  src={I_370}
                  alt="Card image cap"
                /> */}
                <div className={styles.cardBody}>
                  <p className={styles.cardText}>
                    5 Rooms 2 Beds 3 Baths 1100 SQ FT
                  </p>
                </div>
                <ul className={styles.listGroup}>
                  <li className={styles.listGroupItem}>
                    <h3>Appartment Title</h3>
                    <p>Description</p>
                  </li>
                </ul>
                <div className={styles.cardFooter}>
                  <p className={styles.cardPrice}>$35000</p>
                  <button className={styles.detailsBtn}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardStatus}>
                  <p className={styles.cardStatusP}>For Sale</p>
                </div>
                {/* <Image
                  className={styles.cardImage}
                  src={I_370}
                  alt="Card image cap"
                /> */}
                <div className={styles.cardBody}>
                  <p className={styles.cardText}>
                    5 Rooms 2 Beds 3 Baths 1100 SQ FT
                  </p>
                </div>
                <ul className={styles.listGroup}>
                  <li className={styles.listGroupItem}>
                    <h3>Appartment Title</h3>
                    <p>Description</p>
                  </li>
                </ul>
                <div className={styles.cardFooter}>
                  <p className={styles.cardPrice}>$35000</p>
                  <button className={styles.detailsBtn}>Details</button>
                </div>
              </div>
            </div>

            <div className={styles.pagination}>
              {[
                ...Array(Math.ceil(blogPosts.length / postsPerPage)).keys(),
              ].map((number) => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={
                    number + 1 === currentPage
                      ? styles.activePage
                      : styles.pageButton
                  }
                >
                  {number + 1}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.categories}>
            <h3>Properties Search</h3>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
