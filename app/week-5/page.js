"use client";

import NewItem from "./new-item";

export default function Week5() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Week 5 Assignment</h1>
      <NewItem />
      <p className="mt-4 text-sm text-gray-500">
        Don't forget to test the edge cases!
      </p>
    </div>
  );
}
