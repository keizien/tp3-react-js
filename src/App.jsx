import moviesList from './data/moviesList.js';

export default function App() {
  return (
    <>
      <nav className="bg-gray-900 text-white py-4">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold cursor-pointer">CinéTech</h1>
          <ul className="flex gap-6">
            <li className="cursor-pointer">Accueil</li>
            <li className="cursor-pointer">Films</li>
            <li className="cursor-pointer">Catégories</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
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
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="px-4 text-center">
          <h3 className="text-lg font-bold">CinéTech</h3>
          <p className="text-gray-400 mt-2">
            ©2025 CinéTech — Tous droits réservés.
          </p>
          <ul className="flex justify-center gap-6 mt-4 text-gray-300">
            <li className="cursor-pointer">Mentions légales</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">À propos</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
