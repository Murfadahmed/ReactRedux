import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const {Id} = useParams()
  return (
    <div className="ui grid container">
      <h1>Product details: {Id}</h1>
    </div>
  );
}

export default ProductDetail;
