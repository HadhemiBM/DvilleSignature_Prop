import React from "react";
import styles from "./index.module.css"; // Assuming the CSS file is in the same directory

const LoginForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <h2 className={styles.h2}>Login</h2>
          <div className={styles.inputField}>
            <input type="email" required placeholder="Enter your email" />
          </div>
          <div className={styles.inputField}>
            <input
              type="password"
              required
              placeholder="Confirm your password"
            />
          </div>
          <div className={styles.forget}>
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button className={styles.button} type="submit">
            Log In
          </button>
          <div className={styles.register}>
            <p>
              Don't have an account? <a href="./signup">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
