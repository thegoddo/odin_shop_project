import { useState } from "react";
import { useEffect } from "react";

function useApi() {
  const [shopItems, setShopItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => {
        setShopItems(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("Error fetching products:", err);
      })
      .finally(setLoading(false));
  }, []);

  return { shopItems, loading };
}

export default useApi;
