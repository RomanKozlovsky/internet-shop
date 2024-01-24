import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Clothes from "./pages/Clothes";
import React from "react";
import Product from "./pages/Product";
import { GlobalProviders } from "./contexts/GlobalContext";

export default function App() {
  return (
    <div className="App">
      <GlobalProviders>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path={`/clothes/:id`} element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </GlobalProviders>
    </div>
  );
}
