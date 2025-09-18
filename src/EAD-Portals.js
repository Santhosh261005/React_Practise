import React, { useState } from "react";
import Modal from "./Modal";

function App1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Portal Example</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Hello from the Portal!</h2>
        <p>This modal is rendered outside the main #root div.</p>
      </Modal>
    </div>
  );
}

export default App1;
