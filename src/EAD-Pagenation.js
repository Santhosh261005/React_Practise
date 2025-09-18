import React, { useState, useEffect } from "react";

const users = [
  { id: 181, name: "Santhosh", email: "santhosh@gmail.com" },
  { id: 177, name: "Rithwik", email: "rikku@gmail.com" },
  { id: 141, name: "Chips", email: "chips@gmail.com" },
  { id: 199, name: "Anil", email: "anil@gmail.com" },
  { id: 155, name: "John", email: "john@gmail.com" },
  { id: 123, name: "Alice", email: "alice@gmail.com" },
  { id: 221, name: "Mark", email: "mark@gmail.com" },
  { id: 222, name: "Steve", email: "steve@gmail.com" },
];

function Display1() {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedUsers, setPaginatedUsers] = useState([]);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  // 🔑 Use useEffect to slice data whenever page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedUsers(users.slice(startIndex, endIndex));
  }, [currentPage]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>User List</h2>

      {/* Display Users */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
        {paginatedUsers.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "250px",
              textAlign: "left",
            }}
          >
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>

        {/* Numbered Buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              margin: "0 5px",
              fontWeight: currentPage === index + 1 ? "bold" : "normal",
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Display1;
