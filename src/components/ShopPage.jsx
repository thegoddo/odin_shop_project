import useApi from "../utils/useApi";
import "../Styles/ShopPage.css";
import Card from "./Card";
export default function ShopPage() {
  const { shopItems, loading } = useApi();

  return (
    <>
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
