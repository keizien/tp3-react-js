import moviesList from './data/moviesList.js';
import MoviesList from './components/MoviesList.jsx';
import MovieCard from './components/MovieCard.jsx';

export default function App() {
  return (
    <>
      <nav className="bg-gray-900 text-white py-4">
        <div className="flex justify-between">
          <h1 className="hover:text-red-400 text-xl font-bold cursor-pointer">
            CinéTech
          </h1>
          <ul className="flex gap-6">
            <li className="hover:text-red-400 cursor-pointer">Accueil</li>
            <li className="hover:text-red-400 cursor-pointer">Films</li>
            <li className="hover:text-red-400 cursor-pointer">Catégories</li>
            <li className="hover:text-red-400 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto mt-6">
        <h2 className="text-2xl font-bold mb-4">Film du moment</h2>
        <ul className="grid grid-cols-1 gap-6">
          {moviesList
            .filter((movie) => movie.cinema === 'Film du moment')
            .map((movie) => (
              <li key={movie.id} className="bg-gray-100 rounded-xl p-4 shadow">
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full sm:w-1/4 h-auto object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-3xl font-semibold mt-2">
                      {movie.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {movie.year} — {movie.director}
                    </p>
                    <p className="mt-2 text-red-500">Note : {movie.rating}</p>
                    <p className="mt-2">{movie.synopsis}</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <MoviesList movies={moviesList} title="Films à l'affiche" />{' '}
        <MoviesList
          movies={moviesList}
          title="Coups de cœur"
          filterFn={(movie) => movie.rating >= 8}
        />
        <MoviesList
          movies={moviesList}
          title="Films de super-héros"
          filterFn={(movie) => movie.categorie === 'Super-héros'}
        />
      </main>
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="px-4 text-center">
          <h3 className="text-lg font-bold">CinéTech</h3>
          <p className="text-gray-400 mt-2">
            ©2025 CinéTech — Tous droits réservés.
          </p>
          <ul className="flex justify-center gap-6 mt-4 text-gray-300">
            <li className="hover:text-red-400 cursor-pointer">
              Mentions légales
            </li>
            <li className="hover:text-red-400 cursor-pointer">Contact</li>
            <li className="hover:text-red-400 cursor-pointer">À propos</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
