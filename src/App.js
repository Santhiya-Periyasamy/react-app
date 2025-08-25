import React, { useState } from "react";

function App() {
  const [note, setNote] = useState("");       // input value
  const [notes, setNotes] = useState([]);     // list of notes

  // Add a new note
  const addNote = (e) => {
    e.preventDefault();
    if (note.trim() === "") return; // avoid empty notes
    setNotes([...notes, note]);
    setNote(""); // clear input
  };

  // Delete a note by index
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>📝 Notes App</h1>

      <form onSubmit={addNote}>
        <input
          type="text"
          value={note}
          placeholder="Write a note..."
          onChange={(e) => setNote(e.target.value)}
          style={{ padding: "10px", width: "70%" }}
        />
        <button type="submit" style={{ padding: "10px 15px", marginLeft: "5px" }}>
          Add
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {notes.map((n, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#f4f4f4",
              margin: "5px 0",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {n}
            <button
              onClick={() => deleteNote(index)}
              style={{ padding: "5px 10px", background: "red", color: "white", border: "none", borderRadius: "3px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
