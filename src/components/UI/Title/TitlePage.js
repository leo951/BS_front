import React from 'react';
import styles from "./TitlePage.module.scss"

const Titlepage = (props) => {
    return (
        <div className={styles.title__page}>
            {props.title}
        </div>
    );
}

export default Titlepage;
