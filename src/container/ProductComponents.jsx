import React from "react";
import { useSelector } from "react-redux";

function ProductComponents() {
  const products = useSelector((state) => state.allProducts.products);
  // const { id, title, category } = products[0];
  // console.log(products);
  return (
    <div style={cardStyle}>
    <img
      src="https://placekitten.com/300/200" // Replace with your image URL
      alt="Card Image"
      style={imageStyle}
    />
    <div style={contentStyle}>
      <h2 style={titleStyle}>Card Title</h2>
      <p style={descriptionStyle}>This is a sample card description.</p>
      <button style={buttonStyle}>Click me</button>
    </div>
  </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  overflow: 'hidden',
  margin: '50px 20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius:20
};

const contentStyle = {
  padding: '16px',
};

const titleStyle = {
  fontSize: '1.5rem',
  margin: '0 0 10px',
};

const descriptionStyle = {
  fontSize: '1rem',
  margin: '0 0 10px',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default ProductComponents;
