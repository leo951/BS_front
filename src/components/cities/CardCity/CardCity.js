import React, { useContext } from "react";
import Link from "next/link";
import styles from "./CardCity.module.scss";

const CityProduct = (props) => {
    console.log("Je suis props = ",props);
  return (
    <div className={styles.card__container}>
      <Link href={`/product/${props.isCity.id}`}>
        <a className={styles.card__img}>
          <img src={props.isCity.img} />
          <p className={styles.card__text}>{props.isCity.name}</p>
        </a>
      </Link>
    </div>
  );
};

export default CityProduct;
