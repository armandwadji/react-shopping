import React from "react";

const Article = ({ id, name, pic, price, amount, panier, setPanier }) => {
  const addition = (id) => {
    const panierAdd = panier;
    panierAdd.map(
      (e) => e.id === id && (e.amount += 1) && setPanier([...panierAdd])
    );
  };
  const soustraction = (id) => {
    let panierDel = panier;
    panierDel.map((e) => {
      if (e.id === id) {
        if (
          e.amount === 1 &&
          window.confirm("voulez vous supprimer cette article du panier ? ")
        ) {
          panierDel = panierDel.filter((e) => e.id !== id);
          setPanier([...panierDel]);
        } else if (e.amount > 1) {
          e.amount -= 1;
          setPanier([...panierDel]);
        }
      }
      return panier;
    });
    // console.log(panier);
    // console.log(panierDel);
  };

  return (
    <div className="article-container">
      <h3 className="article-container__deals">{name}</h3>

      <img src={pic} alt={name} />

      <p>
        {price} <span>€</span>
      </p>

      <div className="article-container__addminus">
        <i className="fas fa-trash minus" onClick={() => soustraction(id)}></i>
        <span className="quantity">{amount}</span>
        <i className="fas fa-plus-circle add" onClick={() => addition(id)}></i>
      </div>
    </div>
  );
};

export default Article;

// const panierAdd = panier.find((e) => e.name === name);
//     if (panierAdd) {
//       const panierFilter = panier.filter((e) => e.name !== name);
//       setPanier([
//         ...panierFilter,
//         { name, price, pic, id, amount: panierAdd.amount + 1 },
//       ]);
//     }

// const soustraction = () => {
//   switch (newQuantity) {
//     case 0:
//       alert("vous ne pouvez pas descendre en dessous de zèro !");
//       break;
//     default:
//       setNewQuantity(newQuantity - 1);
//       const data = {
//         pic: article.pic,
//         name: article.name,
//         price: article.price,
//         quantity: newQuantity - 1,
//       };
//       axios.put("http://localhost:3002/articles/" + article.id, data);
//   }
// };
