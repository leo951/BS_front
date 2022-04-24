import React from "react";

import styles from "./Logo.module.scss";

const Logo = (props) => {
  return (
    <>
      {props.forNav == true ? (
        <div className={styles.logoForNav}>Parkmanager Corp</div>
      ) : (
        <div className={styles.logo}>Parkmanager Corp</div>
      )}
    </>
  );
};

export default Logo;
