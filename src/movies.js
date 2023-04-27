// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director);
    return [...new Set(allDirectors)];
  }
  
  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return filteredMovies.length;
  }
  
  // Iteration 3: All scores average - Get the average of all scores with 2 decimals
  function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
    const totalScores = moviesArray.reduce((acc, movie) => {
      if (typeof movie.score === "number") {
        return acc + movie.score;
      } else {
        return acc;
      }
    }, 0);
    const averageScore = totalScores / moviesArray.length;
    return parseFloat(averageScore.toFixed(2));
  }
  
  
  // Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
  }
  
  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray].sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
    return sortedMovies;
  }
  
  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(moviesArray) {
    const sortedMovies = [...moviesArray].sort((a, b) => a.title.localeCompare(b.title));
    const first20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);
    return first20Titles;
  }
  
  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  function turnHoursToMinutes(moviesArray) {
    const updatedMovies = moviesArray.map(movie => {
      const duration = movie.duration;
      let totalMinutes = 0;
      if (duration.includes("h") && duration.includes("min")) {
        const hoursAndMinutes = duration.split(" ");
        const hours = parseInt(hoursAndMinutes[0], 10);
        const minutes = parseInt(hoursAndMinutes[1], 10);
        totalMinutes = hours * 60 + minutes;
      } else if (duration.includes("h")) {
        const hours = parseInt(duration, 10);
        totalMinutes = hours * 60;
      } else if (duration.includes("min")) {
        const minutes = parseInt(duration, 10);
        totalMinutes = minutes;
      }
      return {
        ...movie,
        duration: totalMinutes
      }
    });
    return updatedMovies;
  }
  
  // BONUS - Iteration 8: Best yearly score average - Best yearly score average
  function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null;
  
    const years = moviesArray.reduce((acc, curr) => {
      if (!acc.includes(curr.year)) {
        acc.push(curr.year);
      }
      return acc;
    }, []);
  
    let bestYear = years[0];
    let bestAvg = 0;
  
    years.forEach((year) => {
      const moviesOfYear = moviesArray.filter((movie) => movie.year === year);
      const avgScore =
        moviesOfYear.reduce((total, movie) => {
          if (!movie.score) {
            return total;
          }
          return total + movie.score;
        }, 0) / moviesOfYear.length;
  
      if (avgScore > bestAvg) {
        bestYear = year;
        bestAvg = avgScore;
      } else if (avgScore === bestAvg && year < bestYear) {
        bestYear = year;
      }
    });
  
    return `The best year was ${bestYear} with an average score of ${Number(bestAvg.toFixed(2))}`;
  }
  