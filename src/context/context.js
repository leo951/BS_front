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
    const token = localStorage.getItem("token");
    isUpdate({
      variables: {
        id: spotID,
        available: true,
      },
      onCompleted: (data) => {
        authService.updateUser(token, { spot: null })
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
