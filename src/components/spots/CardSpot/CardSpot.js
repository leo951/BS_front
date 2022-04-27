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

  const token = localStorage.getItem("token");

  const [isUpdate] = useMutation(updateSpot);

  useEffect(() => {
    authService
      .getUser(token)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, [user]);

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

  const selectMySpot = (id) => {
    isUpdateSpot(id);
    updateUser(null);
  };

  const selectNewSpot = (id) => {
    if (user.spot?._id == null) {
      updateUser(id)
      isUpdateSpot(id);
    }else{
      alert('Récuperer votre vehicule avant de choisir une autre place 😊')
    }
  }

  const updateUser = (id) => {
    authService
      .updateUser(token, { spot: id })
      .then((data) => {
        setUser(data.user);
      })
      .catch((err) => console.log(err));
  };

  const isUpdateSpot = (id) => {
    isUpdate({
      variables: {
        id: id,
        number: spot.number,
        available: !spot.available,
      },
      onCompleted: (data) => {
        setSpot(data.updateSpot);
      },
    });
  };

  return (
    <div className={styles.card__component}>
      <div className={styles.card__container}>
        {user.spot?._id == spot?.id ? (
          <div onClick={() => selectMySpot(user.spot._id)}>
            <Cars rotate={180} color={"orange"} />
          </div>
        ) : spot.available == true ? (
          <div onClick={() => selectNewSpot(spot.id)}>
            <Cars rotate={180} color={"green"} />
          </div>
        ) : (
          <Cars rotate={180} color={"red"} />
        )}
        <p>{spot.number}</p>
      </div>
    </div>
  );
};

export default CardSpot;
