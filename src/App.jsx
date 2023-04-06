import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from './components/Checkout/Checkout'
import Footer from "./components/Footer/Footer";
import CartProvider from "./components/context/CartContext";

import './App.css';

function App() {

  return (
    <CartProvider>

      <header>
        <Navbar />
        <Banner desc={'Envío gratis en compras a partir de $6.000'} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} /> 
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to='/' />} /> 
        </Routes>
      </main>

      <footer>
        <Banner desc={'¿Necesitas ayuda? Escríbenos mediante Whatsapp'}/>
        <Footer />
      </footer>

    </CartProvider>
  )
}

export default App
