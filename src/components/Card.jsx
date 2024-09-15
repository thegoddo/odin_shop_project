import { useContext, useState } from "react";
import PropTypes from "prop-types";
import "../Styles/Card.css";
import CartContext from "../utils/CartContext";

function Card({ id, image, title, description }) {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState([{}]);

  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    setQuantity(quantity + 1);
    setProduct((prevItems) => [
      ...prevItems,
      {
        productId: id,
        productImage: image,
        productTitle: title,
        productDescription: description,
        productQuantity: quantity,
      },
    ]);
    addToCart(product[product.length - 1]);
    console.log(`Adding ${quantity} to cart.`);
  }

  return (
    <>
      <div className="card">
        <img className="card-image" src={image} alt="Product Image" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="quantity-controls">
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
          {/* <input type="number" value={quantity} width="30%" /> */}
          <label className="quantity-label">{quantity}</label>
          <button
            onClick={() => setQuantity(quantity > 0 ? quantity - 1 : null)}
          >
            -
          </button>
          <button onClick={() => handleAddToCart()}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
