'use client';
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
