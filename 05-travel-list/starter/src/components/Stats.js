// Job: Provides stats on the list' status (packed, percentage, text etc.)
export function Stats({ items }) {
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
