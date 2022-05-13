import React, { useEffect, useState } from "react";
import TitlePage from "../../components/UI/Title/TitlePage";
import Input from "../../components/UI/input/InputForm/InputForm";
import styles from "./profil.module.scss";
import Message from "../../components/UI/Message/Message";
import withAuth from "../../HOC/withAuth";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { getOneUser } from "../../store/actions/User/getUser";
import { updateUser } from "../../store/actions/User/updateUser";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [success, setSuccess] = useState(false);

  const isUser = useSelector((state) => state.getUser.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    dispatch(updateUser(token, JSON.parse(JSON.stringify(user))))
    setSuccess(true)
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(getOneUser(token));
  }, [dispatch]);

  useEffect(() => {
    setUser(isUser);
  }, [isUser]);

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
          <input
            type="submit"
            value="Modifier votre profil"
            className="btn btn-black"
          />
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

export default withAuth(Index) ;