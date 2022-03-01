import { useGlobalContext } from "../components/Context";

const Shoppin = ({ id, name, pic, price }) => {
  const { panier, addTopanier, delTopanier } = useGlobalContext();

  const editing = (id) => {
    if (panier.find((e) => e.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="article-container">
      <h3 className="article-container__deals">{name}</h3>

      <img src={pic} alt={`${name} pic`} />

      <p>
        {price} <span>€</span>
      </p>

      <div className="article-container__addminus">
        {/* <input type="checkbox" id={id} /> */}

        {/* <label htmlFor={id}>
          <i className="fas fa-heart"></i>
        </label> */}

        {editing(id) ? (
          <i
            className="fas fa-check"
            onClick={() => {
              delTopanier(id);
            }}
          ></i>
        ) : (
          <i
            className="fas fa-shopping-cart"
            onClick={() => {
              addTopanier(name, price, id, pic);
            }}
          ></i>
        )}
      </div>
    </div>
  );
};

export default Shoppin;
