// object with 4 properties and 1 function representing a movie of my personal interest.
var movie = {
  title: "3 Idiots",
  director: "Rajkumar Hirani",
  imdbRating: "8.4/10",
  genre: "comedy",
  // Function to modify title value
  updateTitle: function (newTitle) {
    movie.title = newTitle;
    alert("Title of the movie updated to: " + movie.title);
  }
};

// object is output to the console before the modifications.
console.log("Original movie object:", movie);

// Prompt the user for input to update genre property of movie object
movie.genre = prompt("Enter the new genre for the movie:", movie.genre);

// Prompt the user for input to update director property of movie object
movie.director = prompt("Enter the new director for the movie:", movie.director);

// Call the object's method to update a property
movie.updateTitle("3 Idiots - Bollywood");

// object is output to the console after the modifications.
console.log("Modified movie object:", movie);
