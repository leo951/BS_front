import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cars from "../../svg/Svg"
import styles from "./CardFloor.module.scss";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { getFloor } from "../../../graphql/queries/floors"

const CardFloor = (props) => {
  const router = useRouter();
  const [spots, setSpots] = useState([])
  const [spotsTrue, setSpotsTrue] = useState([])
  const [spotsFalse, setSpotsFalse] = useState([])


  const saveFloor = async (id) => {
      await localStorage.setItem("floor", id);
      router.push("/steps/step4");
  }

  useEffect(() => {
    for (let i = 0; i < spots.length; i++) {
      if (spots[i].available == true) {
        setSpotsTrue(spotsTrue => [...spotsTrue, spots[i]])
      } else {
        setSpotsFalse(spotsFalse => [...spotsFalse, spots[i]])
      }
    }
  }, [spots])


  const { loading, error, data, onCompleted } = useQuery(getFloor, {
    variables: { id: props.isFloor.id },
    onCompleted: (data) => {
      setSpots(data?.getFloor.spots)
    },
  });
  if (error) {
    console.log("je suis error = ", error);
    return null;
  }

  return (
    <div onClick={() => saveFloor(props.isFloor.id)} className={styles.card__component}>
      <a className={styles.card__container} >
        <p className={styles.card__text}><b></b>{`ETAGE : ${props.isFloor.letter}`}</p>
      </a>
      {
        spots && (
          <>
            <Cars color={"green"} rotate={180}/><p>Disponible : {spotsTrue.length}</p>
            <Cars color={"red"} rotate={180}/><p>Indisponible : {spotsFalse.length}</p>
          </>
        )
      }
    </div>
  );
};

export default CardFloor;
