import styles from "./index.module.css";
import "./globals.css";

import Acceuil from "./Acceuil/page";

export default function Home() {
  return (
    <div className={styles.Page}>
      <Acceuil />
    </div>
  );
}
