import { useState } from "react";
import { ItemProps, ItemProps1, Item as Itemtype } from "../types";

function Item({ item, onDelete, onToggle }: ItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        value={item?.packed.toString()}
        onChange={() => onToggle(item?.id)}
      />
      <span style={item?.packed ? { textDecoration: "line-through" } : {}}>
        {item?.quantity} {item?.description}
      </span>
      <button onClick={() => onDelete(item?.id)}>❌</button>
    </li>
  );
}

function List({ items, onDelete, onToggle, onClearList }: ItemProps1) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      ?.slice()
      .sort((a: Itemtype, b: Itemtype) =>
        a.description.localeCompare(b.description)
      );

  if (sortBy === "packed")
    sortedItems = items
      ?.slice()
      .sort((a: Itemtype, b: Itemtype) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item: Itemtype) => (
          <Item
            item={item}
            onDelete={onDelete}
            onToggle={onToggle}
            key={item.id}
          />
        ))}
      </ul>
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

export default List;
