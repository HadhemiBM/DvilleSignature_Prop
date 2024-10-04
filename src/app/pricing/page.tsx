

import React from "react";

import styles from "./index.module.css";
const pricingData = [
  {
    title: "Basic Listing",
    price: 150,
    features: [
      "Basic property listing",
      "Photos (up to 10)",
      "Featured on website",
    ],
    notes: "Ideal for sellers looking for a quick sale.",
  },
  {
    title: "Standard Package",
    price: 300,
    features: [
      "All features of Basic Listing",
      "Open house promotion",
      "Social media advertising",
    ],
    notes: "Great for sellers who want more exposure.",
  },
  {
    title: "Premium Package",
    price: 500,
    features: [
      "All features of Standard Package",
      "Professional photography",
      "3D virtual tour",
      "Detailed property description",
    ],
    notes: "Best for high-end properties.",
  },
  {
    title: "Investor Package",
    price: 800,
    features: [
      "All features of Premium Package",
      "Investment analysis",
      "Rental management services",
      "Market report",
    ],
    notes: "Tailored for investors looking for rental properties.",
  },
];
const Pricing: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blackDiv}></div>
      <div className={styles.grid}>
        {pricingData.map((plan, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.card_title}>{plan.title}</h2>
            <p className={styles.pricing}>
              ${plan.price}
              <span className={styles.small}>/Year</span>
            </p>
            <hr />
            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <p className={styles.notes}>{plan.notes}</p>

            <a href="#" className={styles.cta_btn}>
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
