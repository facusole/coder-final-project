import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import './App.css';

function App() {

  return (
    <div >
        <Navbar />
        <ItemListContainer greeting={'Tutor'}/>
    </div>
  )
}

export default App
