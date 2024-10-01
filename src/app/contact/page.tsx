"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import tt from "../../img/gallery/woman.jpg";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className={styles.blackDiv}>
        <div className={styles.contactInfo}>
          <div>
            <h2>Let's Talk</h2>
            <p className={styles.ltesdes}>
              Looking for a luxury property or want to discuss a real estate
              project? <br />
              Get in touch, and we'd be happy to assist you.
            </p>
          </div>
          <div className={styles.Emaill}>
            <h5 className={styles.Email}>Email : </h5>
            <p>deville.signature@gmail.com</p>
          </div>
          <div className={styles.socials}>
            <h5 className={styles.Social}>Socials:</h5>

            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instafbtwt}
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.Linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instafbtwt}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              className={styles.instafbtwt}
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <form
          className={styles.form}
          action="https://formbold.com/s/92pyY"
          method="POST"
          encType="multipart/form-data"
          // onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="" disabled>
              Select project type
            </option>

            <option value="Property Purchase">Property Purchase</option>
            <option value="Property Sale">Property Sale</option>
            <option value="Rental Inquiry">Rental Inquiry</option>
          </select>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="" disabled>
              Select budget range
            </option>
            <option value="<$500,000">Less than $500,000</option>
            <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
            <option value=">$1,000,000">More than $1,000,000</option>
          </select>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
