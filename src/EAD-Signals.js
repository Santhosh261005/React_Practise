import React from "react";
import { signal } from "@preact/signals-react";

const count = signal(0); // ✅ create a signal

function Counter() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count.value}</h1>

      <button
        onClick={() => count.value++} // directly change value
        style={{ marginRight: "10px" }}
      >
        Increment
      </button>

      <button onClick={() => count.value--}>Decrement</button>
    </div>
  );
}

export default Counter;
