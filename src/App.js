// import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Equipe from "./pages/Equipe";
import Magasin from "./pages/Magasin";
import NotFounds from "./pages/NotFounds";
import Panier from "./pages/Panier";
import { newsData } from "./data/ArtcleData";

function App() {
  const [panier, setPanier] = useState([]);
  let heart = document.querySelector(".heart");

  document.addEventListener("click", () => {
    heart.classList.toggle("visible", panier.length > 0);
  });

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = () => {
  //   axios
  //     .get("http://localhost:3002/articles")
  //     .then((res) => setNewsdata(res.data));
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Magasin
              panier={panier}
              setPanier={setPanier}
              newsData={newsData}
            />
          }
        />
        <Route
          path="/Panier"
          exact
          element={
            <Panier panier={panier} setPanier={setPanier} newsData={newsData} />
          }
        />
        <Route path="/Equipe" exact element={<Equipe />} />
        <Route path="*" element={<NotFounds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
