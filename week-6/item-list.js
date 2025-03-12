import React, { useState } from 'react';
import Item from './item';

const items = [
  { name: "milk, 4 L 🥛", quantity: 1, category: "dairy" },
  { name: "bread 🍞", quantity: 2, category: "bakery" },
  { name: "eggs, dozen 🥚", quantity: 2, category: "dairy" },
  { name: "bananas 🍌", quantity: 6, category: "produce" },
  { name: "broccoli 🥦", quantity: 3, category: "produce" },
  { name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat" },
  { name: "pasta sauce 🍝", quantity: 3, category: "canned goods" },
  { name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" },
  { name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household" },
  { name: "paper towels, 6 pack", quantity: 1, category: "household" },
  { name: "dish soap 🍽️", quantity: 1, category: "household" },
  { name: "hand soap 🧼", quantity: 4, category: "household" },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 border rounded ${sortBy === 'name' ? 'bg-gray-200' : ''}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 border rounded ${sortBy === 'category' ? 'bg-gray-200' : ''}`}
        >
          Sort by Category
        </button>
      </div>
      <ul className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
        {sortedItems.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}
