import { useState } from "react";
import Logo from "./components/Logo";
import List from "./components/List";
import Stats from "./components/Stats";
import Form from "./components/Form";
import { Items, Item } from "./types";

function App() {
  const [items, setItems] = useState<Items>([]);

  function handleItems(item: Item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id: string) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleToggle(id: string) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <List
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
