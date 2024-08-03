const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: false,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/* 
////---- Destructuring ----//
// Objects
const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// Arrays
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [firstGenre, secondGenre] = genres;
console.log(firstGenre, secondGenre);

//--- REST operator ----//
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

//---- SPREAD operator ----//
// arrays
const newGenres = [...genres, "epic fantasy"];
newGenres;

// objects
const updatedBook = {
  // spreads out existing object values into the new object
  ...book,
  // Adds a new property
  moviePublicationDate: "2001-12-19",
  // overwriting an existing property
  pages: 1210,
};
console.log(updatedBook);

// Arrow functions
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// Ternary
const summary = `${title} is a book with ${pages} pages, and was written by ${author} - and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"}been adapted as a movie.`;
summary;

// Ternary operator
const pagesRange = pages > 1000 ? "over a thousand" : "under a thousand";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

//-- && || operators short-circuiting --//

// Returns false because first operand is falsy
console.log(false && "Some string");
// Returns "This book has a movie" if hasMovieAdaptation is truthy
console.log(hasMovieAdaptation && "This book has a movie");

// Returns "Some string" because first operand is truthy
console.log("morten" && "Some string");
// Returns 0 because first operand is falsy
console.log(0 && "Some string");

// Returns true because first operand is truthy
console.log(true || "Some string");
// Returns "Some string" because first operand is falsy
console.log(false || "Some string");

// May throw an error if book.translations or book is undefined
console.log(book.translations.spanish);

// Defaults to "NOT TRANSLATED" if book.translations.spanish is falsy
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
console.log(spanishTranslation);

// Defaults to "no data" if book.reviews.librarything.reviewsCount is null or undefined
// const count = book.reviews.librarything.reviewsCount ?? "no data";

//-- Optional chaining //--
// Issue: book [3] has no librarything reviews, so must use optional chaining
function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount; // 49701
  // optilnal chain (?) only continues if code before is not defined/null. default 0 if null(??)
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}
console.log(getTotalReviewCount(book));
*/

/*
//---- // The Array map Method ---- //
const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

// Map method loops over an array and return a new array with the same length with some operation applied to each of the elements of the original array
const titles = books.map((book) => book.title);
titles;

// ({}) after arrow means auto return array
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

//---- // The Array filter Method ---- //

// If condition is true, filtered in. If false, not filtered in
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation)
  .filter((book) => book.translations.spanish)
  .filter((book) => book.translations.polish);
console.log(longBooks); // A game of thrones

// .filter() filters in the required conditions
// .map() makes this a new array with only the .titles displayed in the result
const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//---- // The Array reduce Method ---- //
// We want to know how many pages there are together in all the books combined
// Add together all pages properties
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks; // 3227
// Notes
// Called 'reduce' to reduce entire array to one value (pages here)
// acc(accumilator) = current total value, which starts at 0 (starter value).
// 0 becomes the sum of the first book after the first iteration

//---- // The Array sort Method ---- //
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
arr;
sorted;
// .sort() mutates the original array, unlike the other methods
// Adding slice() makes a copy of og array, preventing mutation
// a = current value, b = next value
// a - b negative = sorting ascending
// a + b would return descending sorting

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;
// Books sorted by most pages and down (ascending)

//---- Working with immutabel arrays (not changing OG array) ----//
// 1) add book object to array
const newBook = {
  id: 6,
  title: "harry pothead",
  author: "J.K potty",
};
const booksAfterAdd = [...books, newBook]; // takes all objects from the books array and combines newBook into a new array called 'booksAfterAdd'
booksAfterAdd;

// 2) delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterAdd;

// 3) update book object in the array
// .map when we want to update an object inside an array
// change LOTR pages count to 1
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;
*/

// ---- Asynchronous: Promises ----//
// .then
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// asycn function
async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
}
getTodos();
