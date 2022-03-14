import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Article from "../components/Article";
import axios from "axios";
import { useGlobalContext } from "../components/Context";

const Panier = () => {
  const { panier, total } = useGlobalContext();

  const valider = () => {
    const data = {
      Facture: [...panier],
      total: total,
    };
    axios.post("http://localhost:3002/panier/", data);
  };

  return (
    <div className="panier">
      <Navigation />
      <h1>Panier</h1>
      <Logo />
      {panier.length > 0 ? (
        <>
          <div className="product-center">
            <ul className="article">
              {panier.map((item) => (
                <Article {...item} key={item.id} />
              ))}
            </ul>
          </div>

          <p className="total-prices">
            Total Shopping : <span>{total}</span> €
          </p>
          <br />
          <button className="btn" onClick={valider}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Valider
          </button>
        </>
      ) : (
        <h3>Votre panier est vide</h3>
      )}
    </div>
  );
};

export default Panier;
