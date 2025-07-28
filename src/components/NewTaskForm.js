import React, { useState } from "react";

function NewTaskForm({ categories = [], onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText(""); // clear input after submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>

      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) =>
            cat === "All" ? null : <option key={cat}>{cat}</option>
          )}
        </select>
      </label>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
