import useApi from "../utils/useApi";
import "../Styles/ShopPage.css";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

export default function ShopPage() {
  const { shopItems, loading } = useApi();
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/cart");
  }

  return (
    <>
      {/* FIXME: Doesn't Show the autosuggestion, also doesn't filter results */}
      <SearchBar />
      <button onClick={handleOnClick}>Cart</button>
      <div className="container">
        {loading ? (
          <p>Loading</p>
        ) : (
          shopItems.map((shopItem) => (
            <Card
              key={shopItem.id}
              id={shopItem.id}
              image={shopItem.image}
              title={shopItem.title}
              description={shopItem.description}
            />
          ))
        )}
      </div>
    </>
  );
}
