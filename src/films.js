function getAllDirectors(array) {
  const directors = array.map(movie => movie.director)

  return directors;
}

function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter(movie => movie.director == director)

  return moviesFromDirector
}

function moviesAverageOfDirector(array, director) {
  const arrayDirector = getMoviesFromDirector(array, director);

  if (arrayDirector.length === 0) return null

  let sumScores = arrayDirector.reduce((sum, movie) => sum + movie.score, 0)
  let averageScore = (sumScores/ arrayDirector.length).toFixed(2)
  
  return parseFloat(averageScore);
}

function orderAlphabetically(array) {
  const moviesTitles = array.map(movie => movie.title)
  .sort()
  .slice(0,20)

  return moviesTitles
}

function orderByYear(array) {
  const moviesTitlesByYear = array.map (movie => {
    return {title: movie.title, year: movie.year
    }
  })
  .sort ((paramA, paramB) => {
    if (paramA.year == paramB.year) {
      return paramA.title.localeCompare(paramB.title)
    } else {
      return paramA.year - paramB.year
    }
  })

  return moviesTitlesByYear

}

function moviesAverageByCategory(array, genre) {
  const moviesByGenre = array.filter (movie => movie.genre.includes(genre))

  if (moviesByGenre.length === 0) return null

  let sumScores = moviesByGenre.reduce((sum, movie) => sum + movie.score, 0)

  let averageScore = (sumScores / moviesByGenre.length).toFixed(2)

  return parseFloat(averageScore)

}

function hoursToMinutes(array) {
  const arrayMinutes = array.map(movie => ({ ...movie, duration: convertDurationToMinutes(movie.duration)}));

  return arrayMinutes;
}

function bestFilmOfYear(array, year) {
  if (array.length < 1) {return null}

  let moviesByYear = array.filter (movie => movie.year === year) .sort ((a,b) => (b.score - a.score))

  return [moviesByYear[0]]
  
}


if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
