import React from "react";
import styles from "./index.module.css";
import "./glob.css";

const SideBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav__cont}>
        <ul className={styles.nav}>
          <li className={styles.nav__items}>
            <i className="fa-solid fa-house"></i>

            <a href="./dashboard">Home</a>
          </li>
          <li className={styles.nav__items}>
            <i className="fa-solid fa-sheet-plastic"></i>
            <a href="./Properties">Properties</a>
          </li>
          <li className={styles.nav__items}>
            <i className="fa-solid fa-image"></i>
            <a href="./gallery">Gallery</a>
          </li>
          <li className={styles.nav__items}>
            <i className="fa-solid fa-inbox"></i>
            <a href="./contact">Contact</a>
          </li>
          <li className={styles.nav__items}>
            <i className="fa-solid fa-inbox"></i>
            <a href="./contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
