import React from "react";

import withAuthAdmin from "../../HOC/withAuthAdmin";

import styles from "./admin.module.scss";

import Titlepage from "../../components/UI/Title/TitlePage";

const Index = () => {

  return (
    <div className={styles.admin__page}>
     <Titlepage title={"Bientot disponible"}/>
    </div>
  );
};

export default withAuthAdmin(Index);
