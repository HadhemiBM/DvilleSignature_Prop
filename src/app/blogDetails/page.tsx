
"use client"; // This ensures the component is rendered on the client side

import React, { useEffect, useState, Suspense } from "react";
import styles from "./index.module.css";
import I_920 from "../../img/gallery/1920_1280.jpg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { list } from "../data/data";

const BlogDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Retrieve the 'id' from query params
  
  const [post, setPost] = useState<any | null>(null);

  useEffect(() => {
    if (id) {
      const foundPost = list.find((post) => post.id === Number(id));
      setPost(foundPost || null);
    }
  }, [id]);

  if (!post) {
    return <p>Loading post details...</p>;
  }

  return (
    <>
      <div className={styles.blackDiv}></div>
      <div className={styles.container}>
        {/* Rest of your code */}
        <div className={styles.blogs}>
          <div className={styles.Gallery}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardStatus}>
                  <p className={styles.cardStatusP}>{post.date}</p>
                </div>
                <Image
                  className={styles.card_img_top}
                  src={I_920}
                  alt="Card image cap"
                />
                <ul className="list-group list-group-flush">
                  <li className={styles.listGroupItem}>
                    <h2>{post.name}</h2>
                  </li>
                </ul>
                <div className={styles.card_body}>
                  <p className="card-Role">
                    <i className="fa-solid fa-user"></i> {post.role}
                  </p>
                  <p className="card-comment">
                    <i className="fa-solid fa-comment"></i> {post.comments}
                  </p>
                </div>
                <li className="list-group-item">{post.description}</li>
                <div className={styles.card_footer}>
                  <span className={styles.verticalLine}></span>
                  <p>Owner.</p>
                </div>
              </div>
            </div>
            <div className={styles.comments}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function BlogDetailsWrapper() {
  return (
    <Suspense fallback={<div>Loading blog details...</div>}>
      <BlogDetails />
    </Suspense>
  );
}
