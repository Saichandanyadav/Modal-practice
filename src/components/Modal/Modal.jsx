import React from "react";
import PropTypes from "prop-types";  
import image from "../../assets/couple.jpg";
import "./Modal.css";

const Modal = ({ showModal, closeModal, coupleNames }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Celebrating Love: {coupleNames}</h2>
        <div>
          <img src={image} className="image" alt="Beautiful couple" />
        </div>
        <p>ఈ ప్రపంచంలో అందమైన ప్రేమ కథ... {coupleNames} కథ. జీవితం మొత్తం ప్రేమతో, నవ్వులతో మునిగిపోవాలి!</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,  
  closeModal: PropTypes.func.isRequired,
  coupleNames: PropTypes.string.isRequired,
};

export default Modal;
