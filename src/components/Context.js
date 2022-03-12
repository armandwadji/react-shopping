import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext(); // creer pour mettre en place un state qui peut être appeler n'importe où dans toute l'application.

const initialState = {
  panier: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTopanier = (name, price, id, pic) => {
    dispatch({ type: "ADD_PANIER", payload: { name, price, id, pic } });
  };

  const delTopanier = (id) => {
    dispatch({ type: "DEL_PANIER", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.panier]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addTopanier,
        delTopanier,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//hookCustom créer pour rendre le context global et facile à appleler grace à la destructuration et évité ainsi des doubles imports du genre {state}= useContext(AppContext)
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
