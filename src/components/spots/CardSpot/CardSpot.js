import React, { useEffect, useState } from "react";

import Cars from "../../svg/Svg";
import styles from "./CardSpot.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../../store/actions/User/getUser";
import { updateUser } from "../../../store/actions/User/updateUser";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { getSpot } from "../../../graphql/queries/spots";
import { updateSpot } from "../../../graphql/mutations/spots";

const CardSpot = (props) => {
  const dispatch = useDispatch();
  const [spot, setSpot] = useState([]);
  const [user, setUser] = useState([]);

  const isUser = useSelector((state) => state.getUser.user);
  const token = localStorage.getItem("token");

  const [isUpdate] = useMutation(updateSpot);

  useEffect(() => {
    dispatch(getOneUser(token));
  }, [dispatch]);

  useEffect(() => {
    setUser(isUser);
  }, [isUser]);

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
    isUpdateUser(null);
  };

  const selectNewSpot = (id) => {
    if (user.spot?._id == null) {
      isUpdateUser(id);
      isUpdateSpot(id);
    } else {
      alert("Récuperer votre vehicule avant de choisir une autre place 😊");
    }
  };

  const isUpdateUser = (id) => {
    console.log("je suis le spotID pour le USER = ",id);
    dispatch(updateUser(token, { spot: id }));
    dispatch(getOneUser(token));
  };

  const isUpdateSpot = (id) => {
    console.log("Je suis le sportId pour le SPOT = ",id);
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
      {user && (
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
      )}
    </div>
  );
};

export default CardSpot;
