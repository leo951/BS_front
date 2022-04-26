import React, { useEffect, useState } from "react";
import Cars from "../../svg/Svg";
import styles from "./CardSpot.module.scss";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { getSpot } from "../../../graphql/queries/spots";

const CardSpot = (props) => {
  const [spot, setSpot] = useState([]);

  /**
   * @todos : Faire un update de l'utilisateur avec l'id de la place de parking
   * @todos : Faire un update de Spot
   * @todos : mettre le setSpot dans le useEffect pour mettre a jour a chaque fois les données
   * @todos : Faire en sorte que la place de l'utilisateur soit en orange
   */

  const { loading, error, data, onCompleted } = useQuery(getSpot, {
    variables: { id: props.isSpot.id },
    onCompleted: (data) => {
      setSpot(data?.getSpot);
    },
  });
  if (error) {
    console.log("je suis error = ", error);
    return null;
  }

  return (
    <div className={styles.card__component}>
      <div className={styles.card__container}>
        {spot.available == true ? (
          <Cars rotate={180} color={"green"} />
        ) : (
          <Cars rotate={180} color={"red"} />
        )}
        <p>{spot.number}</p>
      </div>
    </div>
  );
};

export default CardSpot;
