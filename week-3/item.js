export default function Item({ name, quantity, category }) {
    return (
      <li className="border p-4 rounded-lg shadow bg-white">
        <p className="text-lg font-bold text-gray-900">{name}</p>  {/* Darker text for better contrast */}
        <p className="text-gray-800">Quantity: {quantity}</p>  {/* Medium-dark text */}
        <p className="text-sm text-gray-600">Category: {category}</p>  {/* Lighter but still readable */}
      </li>
    );
  }
  