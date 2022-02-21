import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Shoppin from "../components/Shoppin";

const Magasin = ({ panier, setPanier, newsData }) => {
  return (
    <div className="magasin">
      <Navigation />
      <h1>BOUTIQUE</h1>
      <Logo />
      <ul className="article">
        {newsData.map(({ id, name, pic, price }) => (
          <Shoppin
            id={id}
            name={name}
            pic={pic}
            price={price}
            key={id}
            panier={panier}
            setPanier={setPanier}
          />
        ))}
      </ul>
    </div>
  );
};

export default Magasin;
