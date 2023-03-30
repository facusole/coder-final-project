import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartContext } from "./components/context/CartContext";

import './App.css';

function App() {

  const [cart, setCart] = useState([])
  console.log(cart)

  const handleAddItem = (item) => {
    setCart([...cart, item])
    console.log(cart)
  }

  const isInCart = (id) => cart.some(prod => prod.id === id)

  const totalQuantity = () => {
    cart.reduce((acc, prod) => acc + prod.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      handleAddItem,
      isInCart,
      totalQuantity
    }}>

      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<ItemListContainer/>} />
          {/* <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Navigate to='/' />} /> */}
        </Routes>
      </main>

    </CartContext.Provider>
  )
}

export default App
