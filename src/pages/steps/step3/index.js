import React, { useState, useEffect } from "react";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { getParking } from "../../../graphql/queries/parkings";

import Titlepage from "../../../components/UI/Title/TitlePage";
import GridFloor from "../../../components/floors/GridFloor/GridFloor";

import styles from "./step3.module.scss";

const Index = () => {
  const [parkingID, setParkingID] = useState("");

  useEffect(() => {
    setParkingID(localStorage.getItem("parking"));
  }, []);

  const { loading, error, data, onCompleted } = useQuery(getParking, {
    variables: { id: parkingID }
  });
  if (error) {
    console.log("je suis error = ", error);
    return null;
  }

  return (
    <div className={styles.step3__page}>
      <div className={styles.step3__container}>
        {data && (
          <>
            <div className={styles.step3__title}>
              <Titlepage
                title={`Veuillez choisir un etage dans le parking ${data.getParking.name}`}
              />
            </div>
            <div className={styles.step3}>
              <GridFloor floors={data.getParking.floors} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
