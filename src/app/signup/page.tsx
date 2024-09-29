import React from "react";
import styles from "./index.module.css"; // Assuming the CSS file is in the same directory

const SignupForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <h2 className={styles.h2}>Sign Up</h2>
          <div className={styles.inputField}>
            <input type="text" required placeholder="Enter your username" />
          </div>
          <div className={styles.inputField}>
            <input type="email" required placeholder="Enter your email" />
          </div>
          <div className={styles.inputField}>
            <input type="password" required placeholder="Enter your password" />
          </div>
          <div className={styles.inputField}>
            <input
              type="password"
              required
              placeholder="Confirm your password"
            />
          </div>
          <button className={styles.button} type="submit">
            Sign Up
          </button>
          <div className={styles.register}>
            <p>
              Already have an account? <a href="/signin">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
