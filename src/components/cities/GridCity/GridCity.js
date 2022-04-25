import { React, useState } from "react";

import styles from "./GridCity.module.scss"
import CardCity from "../CardCity/CardCity"

export default function GridCity(props) {
    return (
        <div className={styles.grid__container}>
        {props.cities.map((city) => (
          <CardCity isCity={city} key={city.id}/>
        ))}
      </div>
    )
}
