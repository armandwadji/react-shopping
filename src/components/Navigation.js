import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Navigation = () => {
  const { amount } = useGlobalContext();

  return (
    <div className="navigation">
      <li className="list">
        <NavLink exact="true" to="/" className="a">
          <span className="icon">
            <i className="fas fa-home"></i>
          </span>
          <span className="text">Boutique</span>
        </NavLink>
      </li>

      <li className="list">
        <NavLink exact="true" to="/Panier" className="a count">
          <span className="icon">
            <i className="fas fa-shopping-cart">
              {amount ? <p className="heart">{amount}</p> : null}
            </i>
          </span>
          <span className="text">Panier</span>
        </NavLink>
      </li>

      <li className="list">
        <NavLink exact="true" to="/Equipe" className="a">
          <span className="icon">
            <i className="fas fa-users"></i>
          </span>
          <span className="text">Equipe</span>
        </NavLink>
      </li>
    </div>
  );
};

export default Navigation;
