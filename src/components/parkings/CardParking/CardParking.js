import React, { useContext } from "react";
import { useRouter } from "next/router";
import styles from "./CardParking.module.scss";

const CardParking = (props) => {
    const router = useRouter();

    const saveParking = async (id) => {
        await localStorage.setItem("parking", id);
        router.push("/steps/step3");
    }

  return (
    <div className={styles.card__component}>
        <a className={styles.card__container} onClick={() => saveParking(props.isParking.id)}>
          <p className={styles.card__text}><b>Parking : </b>{`${props.isParking.name}`}</p>
        </a>
    </div>
  );
};

export default CardParking;
