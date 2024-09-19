import { useContext, useState } from "react";
import PropTypes from "prop-types";
import "../Styles/Card.css";
import CartContext from "../utils/CartContext";

function Card({ image, title, description, price, quantity }) {
  // const [product, setProduct] = useState([{imgUrl: "",productTitle: "", productPrice:"", productQuantity: ""}]);
  const [product, setProduct] = useState([{}]);

  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    setProduct((prevItems) => [
      ...prevItems,
      {
        imgUrl: image,
        title: title,
        price: price,
        quantity: quantity,
      },
    ]);
    // addToCart(product[product.length - 1]);
    addToCart(product);
  }

  return (
    <>
      <div className="card">
        <img className="card-image" src={image} alt="Product Image" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="quantity-controls">
          <h2>{price}$</h2>
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
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default Card;
