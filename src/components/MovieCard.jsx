export default function MovieCard({ movie }) {
  return (
    <li className="bg-gray-100 rounded-xl p-4 shadow">
      <h3 className="text-xl font-semibold">{movie.title}</h3>
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-64 object-cover rounded"
      />
      <p className="text-sm text-gray-600 mt-2">
        {movie.year} — {movie.director}
      </p>
      <p className="mt-2">Note : {movie.rating}</p>
    </li>
  );
}
