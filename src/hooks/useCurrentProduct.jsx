import React from "react";

export default function useCurrentProduct() {
  const [currentProduct, setCurrentProduct] = React.useState([]);

  return { currentProduct, setCurrentProduct };
}
