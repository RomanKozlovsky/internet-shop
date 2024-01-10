import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Clothes from "./pages/Clothes";
import React from "react";

export const Context = React.createContext();

export default function App() {
  const [testData, setTestData] = React.useState("hellow, i'm context");
  return (
    <div className="App">
      <Context.Provider value={{ testData, setTestData }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="clothes" element={<Clothes />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}
