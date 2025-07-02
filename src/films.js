// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const directors = array.map(movie => movie.director)
  console.log("EXERCICE 1: ", directors)
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter(movie => movie.director == director)
  console.log("EXERCISE 2: ", moviesFromDirector)
  return moviesFromDirector
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const arrayDirector = getMoviesFromDirector(array, director);

  if (arrayDirector.length === 0) return null

  let sumScores = arrayDirector.reduce((sum, movie) => sum + movie.score, 0)
  let averageScore = (sumScores/ arrayDirector.length).toFixed(2)
  
  console.log("EXERCISE 3: ", averageScore);
  return parseFloat(averageScore);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const moviesTitles = array.map(movie => movie.title)
  .sort()
  .slice(0,20)

  console.log("EXERCISE 4: ", moviesTitles);
  return moviesTitles
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
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
