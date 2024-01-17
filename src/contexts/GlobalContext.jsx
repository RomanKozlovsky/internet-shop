import React from "react";
import useAllProducts from "../hooks/useAllProducts";
import useCurrentProduct from "../hooks/useCurrentProduct";

const GlobalContext = React.createContext({});

export function GlobalProviders({ children }) {
  const allProducts = useAllProducts();
  const currentProduct = useCurrentProduct();
  const store = {
    allProducts,
    currentProduct,
  };
  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>;
}

export function useStore() {
  const store = React.useContext(GlobalContext);
  return store;
}
