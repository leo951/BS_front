import React from "react";
import Link from "next/link";

import styles from "./InputForm.module.scss";

export const InputForm = (props) => {
  return (
    <div className={styles.form__group}>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        required={props.required}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputForm;
