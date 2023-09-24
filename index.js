/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
const person = [
  {
    name: "Mustafa",
    age: 44,
    city: "Salmiya",
  },
];
console.log(person);

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "mustu_2k@hotmail.com";
console.log(person);

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
// person.hasOwnProperty("email");
// console.log(person.hasOwnProperty("email"));
// person.hasOwnProperty("hobbies");
// console.log (person.hasOwnProperty("hobbies")) //false
const person1 = { name: "John", age: 25 };
function hasKey(obj, key) {
  if (obj[key]) return true;
  else return false;
}

console.log(hasKey(person1, "city"));
/******************************
	Q4) Create a function that checks if all properties in an object have values
 (i.e., no properties are undefined or null).
- running the function on this object should return false
		const myObject = {
		  name: "John",
		  age: 30,
		  city: null,
		};
- running the function on this object should return true 
		const myObject = {
		  name: "John",
		  age: 30,
		  city: "Kuwait",
		};
********************************/

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/
function movieTitles(movies) {
  movies.forEach((movietitle) => {
    console.log(movietitle.title);
  });
}
movieTitles(movies);

/******************************
      Q6) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
function filterYear(x) {
  return x.year == 1994;
}
let filtered = movies.filter(filterYear);
console.log(filtered);

/******************************
      Q7) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
function updatedGenre(mArray) {
  const newArray = mArray.map((movie) => {
    if (movie.title == "The Dark Knight") {
      movie.genre = "Action/Drama";
    }
    return movie;
  });
  return newArray;
}
updatedGenre(movies);
console.log(updatedGenre(movies));
