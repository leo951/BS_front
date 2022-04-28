import React from "react";

import styles from "./Logo.module.scss";
import Link from "next/link";

const Logo = (props) => {
  return (
    <>
      {props.forNav == true ? (
        <div className={styles.logo__container}>
          <Link href="/">
            <button className={styles.logoForNav}>Parkmanager Corp</button>
          </Link>
        </div>
      ) : (
        <div className={styles.logo}>Parkmanager Corp</div>
      )}
    </>
  );
};

export default Logo;
