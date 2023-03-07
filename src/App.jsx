import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";

import './App.css';

function App() {

  return (
    <div >
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
          <Route path="*" element={<Navigate to='/' />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
