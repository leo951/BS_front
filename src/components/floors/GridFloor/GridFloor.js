import { React, useState } from "react";

import CardFloor from "../CardFloor/CardFloor";

import styles from "./GridFloor.module.scss"

export default function GridFloor(props) {
    console.log("Je suis props = ",props);
    return (
        <div className={styles.grid__container}>
        {props.floors.map((floor) => (
          <CardFloor isFloor={floor} key={floor.id}/>
        ))}
      </div>
    )
}