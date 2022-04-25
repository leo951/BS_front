
import React, { useContext } from "react";
import { useRouter } from "next/router";
import styles from "./CardFloor.module.scss";

const CardFloor = (props) => {
    const router = useRouter();

    // const saveFloor = async (id) => {
    //     await localStorage.setItem("floor", id);
    //     router.push("/steps/step4");
    // }

  return (
    <div className={styles.card__component}>
        <a className={styles.card__container} onClick={() => saveFloor(props.isFloor.id)}>
          <p className={styles.card__text}><b></b>{`${props.isFloor.letter}`}</p>
        </a>
    </div>
  );
};

export default CardFloor;
