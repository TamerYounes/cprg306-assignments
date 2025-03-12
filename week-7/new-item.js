"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { id: Math.random().toString(36).substring(2, 9), name, quantity, category };
    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 border p-6 rounded-lg shadow-md bg-white">
      <div className="flex flex-col">
        <label className="font-semibold">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col items-center">
        <label className="font-semibold">Quantity</label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400 transition-colors"
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-600 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {[
            "Produce",
            "Dairy",
            "Bakery",
            "Meat",
            "Frozen Foods",
            "Canned Goods",
            "Dry Goods",
            "Beverages",
            "Snacks",
            "Household",
            "Other",
          ].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
      >
        Add Item
      </button>
    </form>
  );
}
