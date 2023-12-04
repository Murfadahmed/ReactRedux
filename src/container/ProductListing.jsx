import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponents from "./ProductComponents";
import { setProducts } from "../redux/action/productAction";
import axios from "axios";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      // .get(response.json())
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('product',products);
  return (
    <div className="ui grid container">
      <h1>Product Listing</h1>
      <ProductComponents />
    </div>
  );
}

export default ProductListing;
