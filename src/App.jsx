
import { useState } from "react";
import Modal from "./components/Modal/Modal"; 
import "./App.css"; 

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="App">
      <h1>A Gift for you</h1>
      <button onClick={openModal}>Open Surprize</button>
      <Modal showModal={showModal} closeModal={closeModal} />
    </div>
  );
}

export default App;
