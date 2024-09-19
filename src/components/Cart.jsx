import CartContext from "../utils/CartContext";
import { useContext } from "react";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  console.log(cartItems);

  const handleMinusButton = (id) => {
    const quantity = cartItems.find((item) => item.id === id).quantity - 1;
    setCartItems((currentItem) => {
      if (quantity < 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <center>Oops! No Items to show.</center>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.imgUrl} />
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))
      )}
    </>
  );
}
