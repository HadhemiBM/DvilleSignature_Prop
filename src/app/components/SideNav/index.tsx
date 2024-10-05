import React from "react";
import styles from "./index.module.css";
import "./glob.css";

const SideBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav__cont}>
        <ul className={styles.nav}>
          <li className={styles.nav__items}>
            <i
              className="fa-solid fa-house"
              // viewBox="0 0 48 48"
            ></i>

            <a href="./dashboard">Home</a>
          </li>
          <li className={styles.nav__items}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <use href="./gallery"></use>
            </svg>
            <a href="./gallery">Search</a>
          </li>
          <li className={styles.nav__items}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <use href="#map"></use>
            </svg>
            <a href="">Map</a>
          </li>
          <li className={styles.nav__items}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 35.6">
              <use href="#planner"></use>
            </svg>
            <a href="">Planner</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
