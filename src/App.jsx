import moviesList from './data/moviesList.js';

export default function App() {
  console.log(moviesList);
  return (
    <>
      <h1 style={{ color: 'red', background: 'yellow' }}>CinéTech</h1>
      <main>
        <h2 style={{ fontSize: '20px' }}>Films à l'affiche</h2>
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
        <h2 style={{ fontSize: '20px' }}>Coups de coeur</h2>
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
        <h2 style={{ fontSize: '20px' }}>Films de super-héros</h2>
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
