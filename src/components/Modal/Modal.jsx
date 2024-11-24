
import React from "react";
import image from '../../assets/Sample.jpg'
import "./Modal.css"; 

const Modal = ({ showModal, closeModal }) => {
  if (!showModal) return null; 

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Happy Birthday My Dear Love</h2>
        <div>
        <img src={image} className="image" alt="image"/>
        </div>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
