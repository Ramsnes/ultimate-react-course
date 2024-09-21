// Item() is a child-component from PackingList() that receives all the PackingList mapped item id's, and onDeleteItem fn
export function Item({ itemObject, onDeleteItem, onToggleItems }) {
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
