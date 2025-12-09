import Section from './Section';

export default function MoviesList({ movies, filterFn = () => true, title }) {
  const filteredMovies = movies.filter(filterFn);
  return (
    <Section title={title}>
      <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        {filteredMovies.map((movie) => (
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
    </Section>
  );
}
