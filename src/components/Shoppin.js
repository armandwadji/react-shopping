// import axios from "axios";
import React, { useState } from "react";

const Shoppin = ({ id, name, pic, price, panier, setPanier }) => {
  const [isEditing, setIsEditing] = useState(false);

  const addTopanier = (name, price, id, pic) => {
    setIsEditing(true);
    setPanier([...panier, { name, price, id, pic, amount: 1 }]);

    const panierAdd = panier.find((e) => e.id === id);
    if (panierAdd) {
      const panierFilter = panier.filter((e) => e.id !== id);
      setPanier([...panierFilter, { name, price, pic, id, amount: 1 }]);
    }
  };

  const delTopanier = (id) => {
    setIsEditing(false);
    setPanier(panier.filter((e) => e.id !== id));
  };

  return (
    <div className="article-container">
      <h3 className="article-container__deals">{name}</h3>

      <img src={pic} alt={`${name} pic`} />

      <p>
        {price} <span>€</span>
      </p>

      <div className="article-container__addminus">
        <input type="checkbox" id={id} />

        <label htmlFor={id}>
          <i className="fas fa-heart"></i>
        </label>

        {isEditing ? (
          <i className="fas fa-check" onClick={() => delTopanier(id)}></i>
        ) : (
          <i
            className="fas fa-shopping-cart"
            onClick={() => addTopanier(name, price, id, pic)}
          ></i>
        )}
      </div>
    </div>
  );
};

export default Shoppin;
