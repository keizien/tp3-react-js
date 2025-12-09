import { useState } from 'react';

export default function Counter({ valeurInitiale = 0, change = 1 }) {
  const [count, setCount] = useState(valeurInitiale);
  const increment = () => {
    setCount(count + change);
  };
  const decrement = () => {
    setCount(count - change);
  };
  const reinitialise = () => {
    setCount(valeurInitiale);
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
        className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-1 rounded"
        onClick={decrement}
      >
        -1
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-1 rounded"
        onClick={reinitialise}
      >
        Réinitialiser
      </button>
    </div>
  );
}
