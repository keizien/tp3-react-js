import moviesList from './data/moviesList.js';

export default function App() {
  console.log(moviesList);
  return (
    <>
      <h1>CinéTech</h1>
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
      </main>
    </>
  );
}
