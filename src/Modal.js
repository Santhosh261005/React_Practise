import React from "react";
import ReactDOM from "react-dom";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Don't render if modal is closed

  return ReactDOM.createPortal(
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root") // ✅ Render outside root div
  );
}

// Some basic inline styles (you can use CSS or Tailwind)
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  minWidth: "200px",
};

export default Modal;
