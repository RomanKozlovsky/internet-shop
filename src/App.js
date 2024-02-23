import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import React, { Suspense, lazy } from "react";
import { GlobalProviders } from "./contexts/GlobalContext";
import { Circles } from "react-loader-spinner";
const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Clothes = lazy(() => import("./pages/Clothes"));
const Product = lazy(() => import("./pages/Product"));

export default function App() {
  return (
    <div className="App">
      <GlobalProviders>
        <Suspense
          fallback={
            <Circles
              top="50%"
              left="50%"
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          }
        >
          <Routes>
            <Route path="" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="/clothes" element={<Clothes />} />
              <Route path={`/clothes/:id`} element={<Product />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </GlobalProviders>
    </div>
  );
}
