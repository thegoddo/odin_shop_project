import useApi from "../utils/useApi";
import "../Styles/ShopPage.css";
import Card from "./Card";
import SearchBar from "./SearchBar";
export default function ShopPage() {
  const { shopItems, loading } = useApi();

  return (
    <>
      {/* FIXME: Doesn't Show the autosuggestion, also doesn't filter results */}
      <SearchBar />
      <div className="container">
        {loading ? (
          <p>Loading</p>
        ) : (
          shopItems.map((shopItem) => (
            <Card
              key={shopItem.id}
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
