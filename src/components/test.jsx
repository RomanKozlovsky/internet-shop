import React from "react";
import { useStore } from "../contexts/GlobalContext";

export default function Test() {
  const { allProducts } = useStore();
  return (
    <>
      {allProducts.map((item) => (
        <div key={item.id}>
          {item.title}, {item.price}
        </div>
      ))}
    </>
  );
}
