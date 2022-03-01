import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Equipe from "./pages/Equipe";
import Magasin from "./pages/Magasin";
import NotFounds from "./pages/NotFounds";
import Panier from "./pages/Panier";

function App() {
  const [panier, setPanier] = useState([]);
  // let heart = document.querySelector(".heart");

  // document.addEventListener("click", () => {
  //   heart.classList.toggle("visible", panier.length > 0);
  // });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<Magasin panier={panier} setPanier={setPanier} />}
        />
        <Route
          path="/Panier"
          exact
          element={<Panier panier={panier} setPanier={setPanier} />}
        />
        <Route path="/Equipe" exact element={<Equipe />} />
        <Route path="*" element={<NotFounds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
