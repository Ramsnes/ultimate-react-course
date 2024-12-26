import { useState } from "react";

// Job: add new items to the array, not render them
export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Pressing submit
  function handleSubmit(e) {
    e.preventDefault();

    // if no description, nothing happens
    if (!description) return;
    console.log(e);

    // Sets up the structure of the object created and rendered
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
      // id would normally be gathered from a API server
    };
    console.log(newItem);

    // Uses destructured 'onAddItems' prop from param
    onAddItems(newItem);

    // Sets values back to original states after submit
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🚙 trip?</h3>

      {/* Quantity section */}
      <select
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          setQuantity(Number(e.target.value)); // Number() makes it number instead of string
        }}
      >
        {/* Syntax not explained for making the select quantity-number UI and fn */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      {/* Description section */}
      <input
        type="text"
        placeholder="Item..."
        value={description} // 'description' takes in onChange setDescription live
        onChange={(e) => {
          console.log(e.target.value); // Logs what is typed in real time
          setDescription(e.target.value); // Sets 'description' to the value input in real time
        }}
      />
      <button>Add</button>
    </form>
  );
}
