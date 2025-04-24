'use client';
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(',')[0]
      .replace(/[^\p{L}\s]/gu, '') // removes emojis and symbols
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex flex-col sm:flex-row gap-8 p-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4 text-center">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
