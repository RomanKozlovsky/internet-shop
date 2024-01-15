import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Clothes from "./pages/Clothes";
import React from "react";
import Product from "./pages/Product";

export const CurrentIdContext = React.createContext();
export const AllProductsContext = React.createContext();
export const CurrentPrice = React.createContext();
export const CurrentSize = React.createContext();

export default function App() {
  const [currentProductId, setCurrentProductId] = React.useState(0);
  const [currentPrice, setCurrentPrice] = React.useState("UAH");
  const [currentSize, setCurrentSize] = React.useState();
  const [allProducts, setAllProducts] = React.useState([]);

  return (
    <div className="App">
      <CurrentSize.Provider value={{ currentSize, setCurrentSize }}>
        <CurrentPrice.Provider value={{ currentPrice, setCurrentPrice }}>
          <AllProductsContext.Provider value={{ allProducts, setAllProducts }}>
            <CurrentIdContext.Provider value={{ currentProductId, setCurrentProductId, currentPrice, setCurrentPrice }}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route path="" element={<Home />} />
                  <Route path="clothes" element={<Clothes />} />
                  <Route path="clothes/product/" element={<Product />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </CurrentIdContext.Provider>
          </AllProductsContext.Provider>
        </CurrentPrice.Provider>
      </CurrentSize.Provider>
    </div>
  );
}
