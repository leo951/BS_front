import { createContext } from "react";

const CartContext = createContext({
  timeConvert: () => {},
});

export const CartContextProvider = ({ children }) => {
  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " h " + rminutes + " min";
  }

  const context = {
    timeConvert,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContext;
