export default function MovieList({ movies }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Films à l'affiche</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-gray-100 rounded-xl p-4 shadow">
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
        ))}
      </ul>
    </section>
  );
}
