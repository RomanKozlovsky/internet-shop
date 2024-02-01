import React from "react";
import useAllProducts from "../hooks/useAllProducts";
import useCurrentProduct from "../hooks/useCurrentProduct";
import useModal from "../hooks/useModal";
import useCart from "../hooks/useCart";

const GlobalContext = React.createContext({});

export function GlobalProviders({ children }) {
  const allProducts = useAllProducts();
  const oneProduct = useCurrentProduct();
  const modal = useModal();
  const cart = useCart();
  const store = {
    allProducts,
    oneProduct,
    modal,
    cart,
  };
  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>;
}

export function useStore() {
  const store = React.useContext(GlobalContext);
  return store;
}
