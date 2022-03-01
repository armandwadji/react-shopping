import React from "react";
import { useGlobalContext } from "./Context";

const Article = ({ id, name, pic, price, amount }) => {
  const { increase, decrease } = useGlobalContext();

  return (
    <div className="article-container">
      <h3 className="article-container__deals">{name}</h3>

      <img src={pic} alt={name} />

      <p>
        {price} <span>€</span>
      </p>

      <div className="article-container__addminus">
        <i className="fas fa-trash minus" onClick={() => decrease(id)}></i>
        <span className="quantity">{amount}</span>
        <i className="fas fa-plus-circle add" onClick={() => increase(id)}></i>
      </div>
    </div>
  );
};

export default Article;
