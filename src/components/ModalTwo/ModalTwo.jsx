import React from "react";
import PropTypes from "prop-types";  
import image from "../../assets/child.jpg";
import "../Modal/Modal";

const ModalTwo = ({ showModal, closeModal, childNames }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Rowdy Babies: {childNames}</h2>
        <div>
          <img src={image} className="image" alt="Beautiful couple" />
        </div>
        <p></p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

ModalTwo.propTypes = {
  showModal: PropTypes.bool.isRequired,  
  closeModal: PropTypes.func.isRequired,
  childNames: PropTypes.string.isRequired,
};

export default ModalTwo;
