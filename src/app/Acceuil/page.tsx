import React from "react";
import styles from "./index.module.css"; // Assuming the CSS file is in the same directory
import Header from "../components/Header/page";
import AboutSection from "../components/AboutSection";
import PropertiesSection from "../components/PropertiesSection";
import NewsSection from "../components/NewsSection";
// import RecentCard from "../components/RecentCard/page";
import Recent from "../components/RecentCard/page";

const Acceuil: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AboutSection />
      <PropertiesSection />
      <NewsSection />
      {/* <Recent /> */}
    </div>
  );
};

export default Acceuil;
