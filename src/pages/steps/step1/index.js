import React, { useState, useEffect } from "react";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { getCities } from "../../../graphql/queries/cities";

import Titlepage from "../../../components/UI/Title/TitlePage";
import GridCity from "../../../components/cities/GridCity/GridCity";

import styles from "./step1.module.scss";

const Index = () => {
  const { loading, error, data, onCompleted } = useQuery(getCities);
  if (error) {
    return null;
  }

  return (
    <div className={styles.step1__page}>
      <div className={styles.step1__container}>
        <Titlepage title={"Choisissez une ville"} />
        {data && <GridCity cities={data.getCities} />}
      </div>
    </div>
  );
};

export default Index;
