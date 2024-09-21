import { useState } from "react";
import { Item } from "./Item";

// Job: render the items array
export function PackingList({
  items,
  onDeleteItem,
  onToggleItems,
  onClearList,
}) {
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
