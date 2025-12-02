import moviesList from './data/moviesList.js';
import './style.css';

export default function App() {
  console.log(moviesList);
  return (
    <>
      <h1 className="title">CinéTech</h1>
      <main>
        <h2>Films à l'affiche</h2>
        <ul>
          {moviesList.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>
                {movie.year} — {movie.director}
              </p>
              <p>Note : {movie.rating}</p>
            </li>
          ))}
        </ul>
        <h2>Coups de coeur</h2>
        <ul>
          {moviesList
            .filter((movie) => movie.rating >= 8)
            .map((movie) => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>
                  {movie.year} — {movie.director}
                </p>
                <p>Note : {movie.rating}</p>
              </li>
            ))}
        </ul>
        <h2>Films de super-héros</h2>
        <ul>
          {moviesList
            .filter((movie) => movie.categorie == 'Super-héros')
            .map((movie) => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>
                  {movie.year} — {movie.director}
                </p>
                <p>Note : {movie.rating}</p>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
