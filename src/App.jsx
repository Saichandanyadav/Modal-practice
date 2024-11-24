import { useState } from "react";
import Modal from "./components/Modal/Modal"; 
import ModalTwo from "./components/ModalTwo/ModalTwo";
import "./App.css";

function App() {
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);

  return (
    <div className="App">
      <div>
        <h1>A Meaning of LOVE</h1>
        <button onClick={() => setShowModalOne(true)}>Look Them</button>
        <Modal 
          showModal={showModalOne} 
          closeModal={() => setShowModalOne(false)} 
          coupleNames="SankeerthanaSuman" 
        />
      </div>
      <div>
        <h1>A Meaning of CUTIE</h1>
        <button onClick={() => setShowModalTwo(true)}>Look Them</button>
        <ModalTwo 
          showModal={showModalTwo} 
          closeModal={() => setShowModalTwo(false)} 
          childNames="NiviKiwi" 
        />
      </div>
    </div>
  );
}

export default App;
