import React from "react";
import { useEffect } from "react";

export default function useAllProducts() {
  const [allProducts, setAllProducts] = React.useState([]);

  useEffect(() => {
    fetch("https://659a8ae0652b843dea53af1f.mockapi.io/items")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .then((res) => res.json())
      .then((res) => setAllProducts(res))
      .catch((e) => alert("data error"));
  },[]);

  return allProducts;
}
