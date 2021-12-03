import React from "react";

const Modal = ({ onClose, currentPhoto }) => {

    const {name, category, index} =currentPhoto
    

    return (
      <div className="modalBackdrop">
          <div className="modalContainer">
              <h3 className="modalTitle">{name}</h3>
              <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt="current category" />
                <p>Photo Description</p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
          </div>
      </div>
    );
  }
  
  export default Modal;