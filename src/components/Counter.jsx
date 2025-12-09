import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow">
      <p>Compteur : {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
        onClick={increment}
      >
        +1
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
        onClick={decrement}
      >
        -1
      </button>
    </div>
  );
}
