import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((cartItem) => {
      const itemExists = cartItem.find(
        (item) => item.title === product.title
      )?.title;

      if (itemExists) {
        return cartItem.map((item) => {
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [
          ...cartItem,
          {
            imgUrl: product.imgUrl,
            title: product.title,
            quantity: 1,
            price: product.price,
            id: crypto.randomUUID(),
          },
        ];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
