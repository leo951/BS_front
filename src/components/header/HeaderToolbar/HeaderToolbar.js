import React from "react";

import styles from "./HeaderToolbar.module.scss";

import Link from "next/link";

const HeaderToolbar = () => {

  return (
    <div className={styles.header__toolbar}>
      <div className={styles.profilLogo}>
        <Link  href="/login">
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderToolbar;
