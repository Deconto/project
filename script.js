
const numberOfFilms = +prompt('How much movies you have seen?', '') ;

const peronalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const a = prompt('One of last movies', ''),
      b = prompt('Your rating?',''),
      c = prompt('One of last movies',''),
      d = prompt('Your rating?','');

peronalMovieDB.movies[a] = b;
peronalMovieDB.movies[c] = d;

console.log(peronalMovieDB);
