import React, { useState, useEffect } from "react";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { getFloor } from "../../../graphql/queries/floors";

import Titlepage from "../../../components/UI/Title/TitlePage";
import GridSpot from "../../../components/spots/GridSpot/GridSpot";

import styles from "./step4.module.scss";

const Index = () => {
  const [floorID, setFloorID] = useState("");

  useEffect(() => {
    setFloorID(localStorage.getItem("floor"));
  }, []);

  const { loading, error, data, onCompleted } = useQuery(getFloor, {
    variables: { id: floorID }
  });
  if (error) {
    console.log("je suis error = ", error);
    return null;
  }

  return (
    <div className={styles.step4__page}>
      <div className={styles.step4__container}>
        {data && (
          <>
            <div className={styles.step4__title}>
              <Titlepage
                title={`Choississez une place à l'étage : ${data.getFloor.letter}`}
              />
            </div>
            <div className={styles.step4__content}>
              <GridSpot spots={data.getFloor.spots} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
