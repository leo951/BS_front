import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import authService from "../../services/auth.service";

import styles from "./register.module.scss";

import Titlepage from "../../components/UI/Title/TitlePage";
import InputForm from "../../components/UI/input/InputForm/InputForm";
import Message from "../../components/UI/Message/Message";

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .register(user)
      .then((data) => {
        if (data.message) {
          setError(true);
          setErrorMessage(data.message);
          return;
        }
        localStorage.setItem("token", data.token);
        router.push("/profil");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.register__page}>
      <div className={styles.register__container}>
        <div className="page__register">
          <Titlepage title="Créer un compte" />
        </div>
        <form
          className={styles.form__register}
          onSubmit={(e) => handleSubmit(e)}
        >
          <InputForm
            label="Nom :"
            id="firstname"
            type="text"
            name="firstname"
            placeholder="Nom"
            required={true}
            onChange={(e) => {
              setUser({ ...user, firstname: e.target.value });
            }}
          />

          <InputForm
            label="Prenom :"
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Prénom"
            required={true}
            onChange={(e) => {
              setUser({ ...user, lastname: e.target.value });
            }}
          />

          <InputForm
            label="Numéro de téléphone :"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Numéro de telephone"
            required={true}
            onChange={(e) => {
              setUser({ ...user, phone: e.target.value });
            }}
          />

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

          <input className="btn btn-black" value="M'inscrire" type="submit" />
          {error ? (
            <Message message={errorMessage} type={"error"} />
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default Index;
