import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import authService from "../services/auth.service";

const withAuthAdmin = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [verify, setVerify] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      authService
        .verifyAdmin(token)
        .then((data) => {
          console.log(data);
          if (data.admin == true) {
            setVerify(true);
          } else {
            localStorage.removeItem("token");
            router.push("/login");
          }
        })
        .catch((err) => {
          localStorage.removeItem("token");
          router.push("/login");
        });
    }, []);
    if (verify == true) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuthAdmin;
