import { React, useState } from "react";

import CardParking from "../CardParking/CardParking";

import styles from "./GridParking.module.scss"

export default function GridParking(props) {
    return (
        <div className={styles.grid__container}>
        {props.parkings.map((parking) => (
          <CardParking isParking={parking} key={parking.id}/>
        ))}
      </div>
    )
}
