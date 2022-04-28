import { createContext } from "react";
import authService from "../services/auth.service";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { updateSpot } from "../graphql/mutations/spots";


const CartContext = createContext({
  removeSpot: () => {}
});

export const CartContextProvider = ({ children }) => {
  const [isUpdate] = useMutation(updateSpot);
  var user = {}
  
  const removeSpot = (spotID) => {
    console.log("Je suis bien dans remove");
    const token = localStorage.getItem("token");
    isUpdate({
      variables: {
        id: spotID,
        available: true,
      },
      onCompleted: (data) => {
        console.log("Je suis dans le completed");
        authService.updateUser(token, { spot: null }).then((data) => console.log("Je suis dans le then"))
        .catch((err) => console.log(err));
      },
    });
  };

  const context = {
    removeSpot,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContext;
