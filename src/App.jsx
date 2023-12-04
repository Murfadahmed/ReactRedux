import { useState } from "react";
import "./App.css";
import Header from "./container/Header";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import ProductListing from "./container/ProductListing";
import ProductDetail from "./container/ProductDetail";

function App() {
  return (
    <>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" Component={ProductListing} />
        <Route path="product/:Id" Component={ProductDetail} />
        <Route>404 Error</Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
