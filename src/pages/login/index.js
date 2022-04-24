import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import authService from "../../services/auth.service";


import styles from "./login.module.scss";

import Titlepage from "../../components/UI/Title/TitlePage";
import InputForm from "../../components/UI/input/InputForm/InputForm";

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  const redirectTo = () => {
    router.push("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    authService
      .login(user)
      .then((data) => {
        if (data.message) {
          return false;
        }
        localStorage.setItem("token", data.token);
        // router.push({pathname: "/home"});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.login__page}>
      <div className={styles.login__container}>
        <div className={styles.login__text}>
          <div className={styles.login__text_title}>
            <Titlepage title={"S'identifier"} />
          </div>
          <form
            className={styles.form__register}
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className={styles.input__text_group}>
              <InputForm
                label="Email :"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required={true}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />

              <InputForm
                label="Mot de passe :"
                id="password"
                name="password"
                type="password"
                placeholder="Mot de passe"
                required={true}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>

            <input
              className={styles.input__submit}
              value="S'identitfier"
              type="submit"
            />
          </form>
          <div>
            <p onClick={() => redirectTo()}>Première visite ?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
