import ShopPage from "../components/ShopPage";
import Cart from "../components/Cart";
import ErrorPage from "../components/PageNotFound";

const routes = [
  {
    path: "/",
    element: <ShopPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "*",
    element: <ErrorPage />
  }
];

export default routes;
