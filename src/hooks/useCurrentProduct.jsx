import React from "react";

export default function useCurrentProduct() {
  const [product, setProduct] = React.useState([]);
  return { product, setProduct };
}
