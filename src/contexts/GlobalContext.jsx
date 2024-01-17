import React from "react";
import useAllProducts from "../hooks/useAllProducts";

const GlobalContext = React.createContext({});

export function GlobalProviders({ children }) {
  const allProducts = useAllProducts();
  const store = {
    allProducts,
  };
  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>;
}

export function useStore() {
  const store = React.useContext(GlobalContext);
  return store;
}
