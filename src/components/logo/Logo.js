import React from "react";

import styles from "./Logo.module.scss";
import Link from "next/link";


const Logo = (props) => {
  return (
    <>
      {props.forNav == true ? (
        <Link href="/">
          <div className={styles.logoForNav}>Parkmanager Corp</div>
        </Link>
      ) : (
        <div className={styles.logo}>Parkmanager Corp</div>
      )}
    </>
  );
};

export default Logo;
