"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

const Header: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div className={styles.aa_header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-md-12">
            <div className={styles.aa_header_area}>
              <div className={styles.row}>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className={styles.aa_header_left}>
                    <div className={styles.aa_telephone_no}>
                      <span className={styles.fa_phone}> 📞</span>
                      +971 58 560 6752
                    </div>
                    <div className={(styles.aa_email, styles.hidden_xs)}>
                      <span className={styles.fa_envelope_o}> 📧</span>
                      info@Deville
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className={styles.aa_header_right}>
                    <a href="/signup" className={styles.aa_register}>
                      Register
                    </a>
                    <a href="/sigin" className={styles.aa_login}>
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
