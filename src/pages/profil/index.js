import React, { useEffect, useState } from "react";
import TitlePage from "../../components/UI/Title/TitlePage";
import authService from "../../services/auth.service";
import Input from "../../components/UI/input/InputForm/InputForm";
import styles from "./profil.module.scss";
import Message from "../../components/UI/Message/Message";
import withAuth from "../../HOC/withAuth";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    authService
      .updateUser(token, JSON.parse(JSON.stringify(user)))
      .then((data) => {
        setSuccess(true);
        setUser(data.user);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    authService
      .getUser(token)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const disconnect = () => {
    localStorage.removeItem("token");
    router.push({ pathname: "/" });
  };

  return (
    <div className={styles.profil__page}>
      <div className={styles.profil__container}>
        <TitlePage title="mon compte" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            label="Nom"
            type="text"
            id="lastname"
            name="lastname"
            value={(user && user.lastname) || ""}
            onChange={(e) => {
              setUser({ ...user, lastname: e.target.value });
            }}
          />
          <Input
            label="Prénom"
            type="text"
            id="firstname"
            name="firstname"
            value={(user && user.firstname) || ""}
            onChange={(e) => {
              setUser({ ...user, firstname: e.target.value });
            }}
          />
          <Input
            label="Email"
            type="text"
            id="email"
            name="email"
            value={(user && user.email) || ""}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <input type="submit" value="Modifier votre profil" className="btn btn-black" />
          <input
            type="button"
            value="deconnection"
            onClick={disconnect}
            className="btn btn-white"
          />
          {success ? (
            <Message type="success" message="votre profil a bien été modifié" />
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default withAuth(Index);
