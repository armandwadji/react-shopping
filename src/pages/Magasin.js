import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Shoppin from "../components/Shoppin";
import { newsData } from "../data/ArtcleData";

const Magasin = () => {
  return (
    <div className="magasin">
      <Navigation />
      <h1>BOUTIQUE</h1>
      <Logo />
      <ul className="article">
        {newsData.map((cart) => (
          <Shoppin {...cart} key={cart.id} />
        ))}
      </ul>
    </div>
  );
};

export default Magasin;
