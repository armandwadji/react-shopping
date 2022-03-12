import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Shoppin from "../components/Shoppin";
import { newsData } from "../data/ArtcleData";

const Magasin = () => {
  console.log(newsData);
  return (
    <div className="magasin">
      <Navigation />
      <h1>BOUTIQUE</h1>
      <Logo />
      <div className="product-center">
        <ul className="article">
          {newsData.map((cart) => (
            <Shoppin {...cart} key={cart.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Magasin;
