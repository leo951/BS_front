import React, { useContext, useEffect, useState } from "react";

import styles from "./HeaderToolbar.module.scss";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { updateSpot } from "../../../graphql/mutations/spots";

import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../../store/actions/User/getUser";
import { updateUser } from "../../../store/actions/User/updateUser";

import Link from "next/link";

const HeaderToolbar = () => {
  const [isUpdate] = useMutation(updateSpot);
  const dispatch = useDispatch();
  const isUser = useSelector((state) => state.getUser.user);

  const [user, setUser] = useState([]);
  const [token, setToken] = useState(Boolean);

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setToken(true);
    } else {
      setToken(false);
    }
    const token = localStorage.getItem("token");
    dispatch(getOneUser(token));
  }, [dispatch]);

  useEffect(() => {
    setUser(isUser);
  }, [isUser]);

  const removeSpot = (spotID) => {
    isUpdate({
      variables: {
        id: spotID,
        available: true,
      },
      onCompleted: (data) => {
        dispatch(updateUser(token, { spot: null }));
      },
    });
  };

  return (
    <div className={styles.header__toolbar}>
      {user && (
        <>
          <div className={styles.header__spot}>
            {user.spot != null && (
              <p onClick={() => removeSpot(user.spot._id)}>
                Cliquez pour récupérer votre véhicule
              </p>
            )}
          </div>
          <div>
            {user.isAdmin == true && (
              <div className={styles.header__admin}>
                <Link href="/admin">
                  <p>Admin</p>
                </Link>
              </div>
            )}
          </div>
        </>
      )}

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
