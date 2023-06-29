import { useState } from "react";

function Form({ onAddItems }: any) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleChange1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you ned for your trip</h3>
      <select value={quantity} onChange={handleChange1}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name=""
        placeholder="item..."
        className="input"
        value={description}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
