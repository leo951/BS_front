import React, { useContext } from "react";
import { useRouter } from "next/router";
import styles from "./CardCity.module.scss";

const CityProduct = (props) => {
    const router = useRouter();

    const saveCity = async (id) => {
        await localStorage.setItem("city", id);
        router.push("/steps/step2");
    }

  return (
    <div className={styles.card__component}>
        <a className={styles.card__container} onClick={() => saveCity(props.isCity.id)}>
          <img src={props.isCity.img} />
          <p className={styles.card__text}>{props.isCity.name}</p>
        </a>
    </div>
  );
};

export default CityProduct;
