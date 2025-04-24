export default function Item({ name, quantity, category, onSelect }) {
    return (
      <li
        className="border p-2 my-2 cursor-pointer"
        onClick={() => onSelect && onSelect(name)}
      >
        {name}, {quantity} ({category})
      </li>
    );
  }