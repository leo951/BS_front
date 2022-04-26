import { React, useState } from "react";

import CardSpot from "../CardSpot/CardSpot";

import styles from "./GridSpot.module.scss"

export default function GridSpot(props) {
    return (
        <div className={styles.grid__container}>
        {props.spots.map((spot) => (
          <CardSpot isSpot={spot} key={spot.id}/>
        ))}
      </div>
    )
}