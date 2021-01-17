import React from "react";
import "../App.css";
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal_content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        {children}
        {/* <a className="modal-close" onClick={handleClose}>
          close
        </a> */}
      </div>
    </div>
  );
};

export default Modal;
