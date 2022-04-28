import React, { useState, useEffect } from "react";

import withAuth from "../../../HOC/withAuth";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { getCity } from "../../../graphql/queries/cities";

import Titlepage from "../../../components/UI/Title/TitlePage";
import GridParking from "../../../components/parkings/GridParking/GridParking";

import styles from "./step2.module.scss";

const Index = () => {
  const [cityID, setCityID] = useState("");

  useEffect(() => {
    setCityID(localStorage.getItem("city"));
  }, []);

  const { loading, error, data, onCompleted } = useQuery(getCity, {
    variables: { id: cityID },
    onCompleted: (data) => {
      console.log("Je suis data = ", data);
    },
  });
  if (error) {
    console.log("je suis error = ", error);
    return null;
  }

  return (
    <div className={styles.step2__page}>
      <div className={styles.step2__container}>
        {data && (
          <>
            <div className={styles.step2__title}>
              <Titlepage
                title={`Veuillez choisir un parking à ${data.getCity.name}`}
              />
            </div>
            <div className={styles.step2__content}>
              <GridParking parkings={data.getCity.parkings} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default withAuth(Index);
