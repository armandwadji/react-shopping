import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Article from "../components/Article";
import axios from "axios";

const Panier = ({ panier, setPanier }) => {
  const magasin = panier;
  const total = magasin
    .reduce((acc, tot) => acc + tot.price * tot.amount, 0)
    .toFixed(2);

  const valider = () => {
    const data = {
      Facture: panier,
      total: total,
    };
    axios.post("http://localhost:3002/panier/", data);
    console.log(panier);
  };

  return (
    <div className="panier">
      <Navigation />
      <h1>Panier</h1>
      <Logo />
      {panier.length > 0 ? (
        <>
          <ul className="article">
            {magasin.map(({ id, name, pic, price, amount }) => (
              <Article
                id={id}
                name={name}
                pic={pic}
                price={price}
                amount={amount}
                key={id}
                panier={panier}
                setPanier={setPanier}
              />
            ))}
          </ul>

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
