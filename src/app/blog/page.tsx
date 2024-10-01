"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import RecentCard from "../components/RecentCard/RecentCard";
import { list } from "../data/data";

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

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
              <RecentCard posts={currentPosts} />
            </div>

            <div className={styles.pagination}>
              {[...Array(Math.ceil(list.length / postsPerPage)).keys()].map(
                (number) => (
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
                )
              )}
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
                <li>
                  <span>Villa</span>
                  <span>800</span>
                </li>
                <li>
                  <span>Bungalow</span>
                  <span>200</span>
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
