import CartContext from "../utils/CartContext";
import { useContext } from "react";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(
      (cartItem) => cartItem.productId === item.productId
    );
    if (existingItem) {
      existingItem.productQuantity += item.productQuantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);
  return (
    <>
      {cartItems.length === 0 ? (
        <center>Oops! No Items to show.</center>
      ) : (
        groupedItems.map((item) => (
          <div key={item.productId}>
            <img src={item.productImage} />
            <h1>{item.productTitle}</h1>
            <p>{item.productDescription}</p>
            <p>{item.productQuantity}</p>
          </div>
        ))
      )}
    </>
  );
}
