import React, { useEffect, useState } from "react";

import Cars from "../../svg/Svg";
import styles from "./CardSpot.module.scss";
import authService from "../../../services/auth.service";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { getSpot } from "../../../graphql/queries/spots";
import { updateSpot } from "../../../graphql/mutations/spots";

const CardSpot = (props) => {
  const [spot, setSpot] = useState([]);
  const [user, setUser] = useState([]);

  const [isUpdate] = useMutation(updateSpot);

  /**
   * @todos : Faire un update de l'utilisateur avec l'id de la place de parking ... fait
   * @todos : Faire un update de Spot
   * @todos : mettre le setSpot dans le useEffect pour mettre a jour a chaque fois les données
   * @todos : Faire en sorte que la place de l'utilisateur soit en orange
   */

  const selectSpot = async (spotID) => {
    const token = localStorage.getItem("token");
    authService
      .updateUser(token, {"spot": spotID})
      .then((data) => {
        setUser(data.user);
        isUpdateSpot()
      })
      .catch((err) => console.log(err));
  };

  const isUpdateSpot = () => {
    console.log("Je suis spot.id = ",spot.id);
    console.log("Je suis spot.number = ",spot.number);
    console.log("Je suis spot.available = ",spot.available);
    isUpdate({
      variables: {
        id: spot.id,
        number: spot.number,
        available: !spot.available,
      },
      onCompleted: (data) => {
        console.log("Je suis data dans le update du spot = ", data);
        setSpot(data.updateSpot);
      },
    });
  };

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
    <div onClick={() => selectSpot(spot.id)} className={styles.card__component}>
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
