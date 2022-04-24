import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";

import styles from "./HeaderMenu.module.scss";

const Headermenu = () => {
  return (
    <nav>
      <ul className={styles.header__menu}>
        <li>
          <HeaderLogo />
        </li>
        <>
          <li>
            <p>Acceuil</p>
          </li>
          <li>
            <p>A definir</p>
          </li>
          <li>
            <p>A définir</p>
          </li>
        </>
      </ul>
    </nav>
  );
};

export default Headermenu;
