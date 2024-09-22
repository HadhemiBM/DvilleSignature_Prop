import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2024 Persista. All rights reserved.</p>
        <ul className={styles.socialLinks}>
          <li>
            <i className="fa-brands fa-facebook"></i>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Facebook
            </a>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Twitter
            </a>
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
