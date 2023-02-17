import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import './App.css';

function App() {

  return (
    <div >
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContainer greeting={'Tutor'}/>
      </main>
    </div>
  )
}

export default App
