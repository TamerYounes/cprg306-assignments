"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    } else {
      console.log("Max quantity reached!");
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      console.log("Min quantity reached!");
    }
  };

  return (
    <div className="flex flex-col items-center border p-4 rounded-lg shadow-md bg-white">
      <p className="text-lg font-semibold mb-2">Quantity: {quantity}</p>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400 transition-colors"
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}
