import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";

import Link from "next/link";

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
            <Link href="/steps/step1">
              <p>Choisir une place</p>
            </Link>
          </li>
        </>
      </ul>
    </nav>
  );
};

export default Headermenu;
