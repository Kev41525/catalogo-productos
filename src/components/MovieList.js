import React from 'react';

const MovieList = () => {
  // Aquí podrías tener un array con las imágenes de películas animadas
  const movies = [
    // Ejemplo:
    { id: 1, title: 'Película 1', image: 'https://m.media-amazon.com/images/I/81hrmOm3XKL._AC_UF894,1000_QL80_.jpg' },
    { id: 2, title: 'Película 2', image: 'https://cdn.anisearch.de/images/anime/cover/18/18149_300.webp' },
    // ...
  ];

  return (
    <div>
      <h2>Imágenes de películas animadas</h2>
      <div>
        {movies.map(movie => (
          <img key={movie.id} src={movie.image} alt={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;