"use client";

import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Post = {
  id: number; // Added the `id` property to match usage
  date: string;
  cover: string;
  category: string;
  location: string;
  name: string;
  price: string;
  type: string;
};

interface RecentCardProps {
  posts: Post[];
}

const RecentCard: React.FC<RecentCardProps> = ({ posts }) => {
  const router = useRouter();
  
  const handleEdit = (id: number) => {
    router.push(`./blogDetails?id=${id}`);
  };

  return (
    <div className={styles.content}>
      {posts.map((val, index) => {
        const { id, date, cover, category, location, name, price, type } = val;
        return (
          <div className={styles.card} key={index}>
            <div className={styles.Date}>
              <span className={styles.DateText}>{date}</span>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={cover}
                width={600}
                height={100}
                alt={name}
                className={styles.img}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.category}>
                <span
                  style={{
                    background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
                    color: category === "For Sale" ? "#25b579" : "#ff9800",
                  }}
                >
                  {category}
                </span>
              </div>
              <h4 className={styles.title} onClick={() => handleEdit(id)}>{name}</h4>
              <p className={styles.location}>
                <i className="fa fa-location-dot"></i> {location}
              </p>
            </div>
            <div className={styles.footer}>
              <button className={styles.priceButton}>{price}</button>
              <span className={styles.type}>{type}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;
