import Section from './Section';
import MovieCard from './MovieCard';

export default function MoviesList({ movies, filterFn = () => true, title }) {
  const filteredMovies = movies.filter(filterFn);
  return (
    <Section title={title}>
      <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </Section>
  );
}
