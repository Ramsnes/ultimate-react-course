import { useState } from "react";
import { Form } from "./Form";
import Logo from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

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
