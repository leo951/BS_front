import Head from "next/head";
import { React, useState, useEffect } from "react";
import Link from "next/link";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.home__container}>
      <div className={styles.home__hero}>
        <div className={styles.home__text}>
          <h1>Vous recherchez une place ?</h1>
          <Link href="/steps/step1">
            <h3 className="btn btn-white">Cliquez ici</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
