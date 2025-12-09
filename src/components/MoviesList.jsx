import Section from './Section';
import MovieCard from './MovieCard';
import { useState } from 'react';
import { FaArrowUpWideShort } from 'react-icons/fa6';
import { FaArrowDownWideShort } from 'react-icons/fa6';

export default function MoviesList({ movies, title }) {
  const originalList = movies;
  const [sortedMovies, setMovies] = useState(movies);
  const [moviesAsc, setMoviesAsc] = useState(true);

  const sortMoviesByDate = () => {
    const sorted = [...movies].sort((a, b) =>
      moviesAsc ? a.year - b.year : b.year - a.year
    );
    setMovies(sorted);
    setMoviesAsc(!moviesAsc);
  };

  const resetList = () => {
    setMovies(originalList);
  };

  const IconMoviesByDate = moviesAsc
    ? FaArrowDownWideShort
    : FaArrowUpWideShort;

  const filteredMovies = sortedMovies;
  return (
    <Section title={title}>
      <div className="flex bg-gray-100 rounded-xl p-4 shadow sm:p-6 border borderwhite/10">
        <button
          className="ml-auto flex items-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
          onClick={sortMoviesByDate}
        >
          Tri par année
          <IconMoviesByDate />
        </button>
        <button
          className="ml-auto bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-1 rounded"
          onClick={resetList}
        >
          Remettre la liste original
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6 mt-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </Section>
  );
}
