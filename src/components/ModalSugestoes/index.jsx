/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './style.css'

const Modal = ({ isOpen, onClose, children }) => {

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            Fechar
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
