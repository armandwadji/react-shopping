const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PANIER":
      return {
        ...state,
        panier: [...state.panier, { ...action.payload, amount: 1 }],
      };
    case "DEL_PANIER":
      let delPanier = state.panier.filter((item) => item.id !== action.payload);
      return {
        ...state,
        panier: [...delPanier],
      };
    case "INCREASE":
      let increasePanier = state.panier.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      return { ...state, panier: increasePanier };
    case "DECREASE":
      let decreasePanier = state.panier
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.amount !== 0);
      return { ...state, panier: decreasePanier };
    case "GET_TOTALS":
      const amount = state.panier.reduce((acc, val) => acc + val.amount, 0);
      const total = state.panier
        .reduce((acc, val) => acc + val.price * val.amount, 0)
        .toFixed(2);

      return { ...state, amount, total };
    default:
      return state;
  }
};

export default reducer;
