import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

// App.js
export default function App() {
  // Passed down to PackingList()
  const [items, setItems] = useState(initialItems);

  // Adds new items to existing arr
  function handleAddItems(item) {
    setItems((items) => [...items, item]); // items-state + item-param
  }

  // Delete item from arr
  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
    // if each item in new arr is NOT equal to THIS item being pressed, keep it/them
  }

  // Change 'packed' ✅ status
  function handleToggleItem(id) {
    setItems(
      (items) =>
        items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        ) // useState fn setItems takes items as a param and makes a new arr out of it. (item) represents each object in the items arr. Logic checks if the id of the current item being looped over matches the id of the item that was clicked. {} creates a new object with a new arr and the matched id-item now has changed packed status while the other (not matched id's) remain unchanged. !item.packed makes toggles to the opposite true/false.
    );
  }

  // Clear btn
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  // Consider 'onAddItems' etc. as imported function and function-names
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} items={items} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// These componens under could have been in other folders and imported here

function Logo() {
  return <h1>🏝️Far away📦</h1>;
}

// Job: add new items to the array, not render them
function Form({ onAddItems, items }) {
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
        value={description} // 'description' isn't a empty string 'cause 'onChange setDescription' changes the 'description' value at the same time underneath
        onChange={(e) => {
          console.log(e.target.value); // Logs what is typed in real time
          setDescription(e.target.value); // Sets 'description' to the value input in real time
        }}
      />
      <button>Add</button>
    </form>
  );
}

// Job: render the items array
function PackingList({ items, onDeleteItem, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  // Sort by (derived state)
  let sortedItems;
  // Input
  if (sortBy === "input") sortedItems = items;
  // Description
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  // Packed status
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          // <Item /> here refers to comp underneath
          <Item
            itemObject={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>
      {/* Sorting section  */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

// Item() is a child component from PackingList() that receives all the PackingList mapped item id's, and onDeleteItem fn
function Item({ itemObject, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObject.packed}
        onChange={() => {
          onToggleItems(itemObject.id);
        }}
      />
      {/* style = if packed: styling - else: no styling */}
      <span style={itemObject.packed ? { textDecoration: "line-through" } : {}}>
        {itemObject.quantity} {itemObject.description}
      </span>
      <button onClick={() => onDeleteItem(itemObject.id)}>❌</button>
    </li>
  );
}

// Job: Provides stats on the list' status (packed, percentage, text etc.)
function Stats({ items }) {
  // If no items is added
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list</em>
      </p>
    );

  // Gathers the curr length of items state
  const numItems = items.length;
  // Returns the length of items with packed = true status
  const numPacked = items.filter((item) => item.packed).length;
  // Percent of items packed
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPacked === 0
          ? "You haven't packed anything yet. Let's start packing!"
          : percentage === 100
          ? "You got everything! Ready to go ✅"
          : ` 💼 You have ${numItems} item(s) on your list, and you already packed 
             ${numPacked} items (${percentage}%)`}
      </em>
    </footer>
  );
}
