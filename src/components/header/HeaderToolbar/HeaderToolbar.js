import React, { useContext, useEffect, useState } from "react";

import styles from "./HeaderToolbar.module.scss";
import CartContext from "../../../context/context";
import authService from "../../../services/auth.service";

import Link from "next/link";

const HeaderToolbar = () => {
  const { removeSpot } = useContext(CartContext);

  const [user, setUser] = useState([]);
  const [token, setToken] = useState(Boolean);

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setToken(true);
    } else {
      setToken(false);
    }
    const token = localStorage.getItem("token");
    authService
      .getUser(token)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div className={styles.header__toolbar}>
      <div className={styles.header__spot}>
        {user.spot != null && (
          <p onClick={() => removeSpot(user.spot._id)}>
            Cliquez pour récupérer votre véhicule
          </p>
        )}
      </div>
      <div className={styles.profilLogo}>
        {token == false ? (
          <Link href="/login">
            <p>Connexion</p>
          </Link>
        ) : (
          <Link href="/profil">
            <p>Profil</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderToolbar;
