import React from "react";

import styles from './Footer.module.scss'

import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <div className={styles.footer__main}>
      <Logo />
      <p>© 2022 Parkmanager Corp</p>
    </div>
  );
};

export default Footer;
