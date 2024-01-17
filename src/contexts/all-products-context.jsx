import React from "react";
import useGetAllProducts from "../hooks/get-all-products";

const GlobalContext = React.createContext({});

export function GlobalProviders({ children }) {
  const allProducts = useGetAllProducts();
  const store = {
    allProducts,
  };
  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>;
}

export function useStore() {
  const store = React.useContext(GlobalContext);
  return store;
}
