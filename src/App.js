import { BrowserRouter, Route, Routes } from "react-router-dom";
import Equipe from "./pages/Equipe";
import Magasin from "./pages/Magasin";
import NotFounds from "./pages/NotFounds";
import Panier from "./pages/Panier";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Magasin />} />
        <Route path="/Panier" exact element={<Panier />} />
        <Route path="/Equipe" exact element={<Equipe />} />
        <Route path="*" element={<NotFounds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
