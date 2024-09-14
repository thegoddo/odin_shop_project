import { useState } from "react";
import PropTypes from "prop-types";
import "../Styles/Card.css";

function Card({ image, title, description }) {
  const [quantity, setQuantity] = useState(0);

  function addToCart(quantity) {
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
          <button onClick={() => addToCart(quantity)}>Add to cart</button>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
