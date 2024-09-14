import ShopPage from "../components/ShopPage";
import Cart from "../components/Cart";

const routes = [
  {
    path: "/",
    element: <ShopPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
