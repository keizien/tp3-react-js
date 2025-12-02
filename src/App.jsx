import moviesList from './data/moviesList.js';
import styles from './App.module.css';

export default function App() {
  console.log(moviesList);
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-6">CinéTech</h1>
      <main className="max-w-7xl mx-auto mt-6">
        <h2 className="text-2xl font-bold mb-4">Films à l'affiche</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {moviesList.map((movie) => (
            <li key={movie.id} className="bg-gray-100 rounded-xl p-4 shadow">
              <h3 className="text-xl font-semibold mt-2">{movie.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {movie.year} — {movie.director}
              </p>
              <p className="mt-2">Note : {movie.rating}</p>
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover rounded mt-2"
              />
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold mb-4">Coups de coeur</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {moviesList
            .filter((movie) => movie.rating >= 8)
            .map((movie) => (
              <li key={movie.id} className="bg-gray-100 rounded-xl p-4 shadow">
                <h3 className="text-xl font-semibold mt-2">{movie.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {movie.year} — {movie.director}
                </p>
                <p className="mt-2">Note : {movie.rating}</p>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded mt-2"
                />
              </li>
            ))}
        </ul>
        <h2 className="text-2xl font-bold mb-4">Films de super-héros</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {moviesList
            .filter((movie) => movie.categorie == 'Super-héros')
            .map((movie) => (
              <li key={movie.id} className="bg-gray-100 rounded-xl p-4 shadow">
                <h3 className="text-xl font-semibold mt-2">{movie.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {movie.year} — {movie.director}
                </p>
                <p className="mt-2">Note : {movie.rating}</p>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded mt-2"
                />
              </li>
            ))}
        </ul>
        <h2 className="text-2xl font-bold mb-4">Films du moment</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {moviesList
            .filter((movie) => movie.cinema == 'Film du moment')
            .map((movie) => (
              <li key={movie.id} className="bg-gray-100 rounded-xl p-4 shadow">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-96 object-cover rounded"
                />
                <h3 className="text-3xl font-semibold mt-2">{movie.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {movie.year} — {movie.director}
                </p>
                <p className="mt-2 text-red-500">Note : {movie.rating}</p>
                <p className="mt-2">{movie.synopsis}</p>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
