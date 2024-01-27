// library array holds all books
let library = [];

// book object constructor
function BOOK(title, author, numberOfPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveRead = haveRead;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.haveRead}`;
  };
}

const deleteBook = (title) => {
  // remove the row from the table
  const tableBody = document.querySelector(".table-body");
  const row = tableBody.querySelector(`[data-title="${title}"]`);
  tableBody.removeChild(row);

  // remove the book from the library list
  const index = library.findIndex((book) => book.title === title);
  library.splice(index, 1);
  alert(`Deleting Book ${title}!`);
};

const addToShelf = (book) => {
  // dynamically adding them to the html document
  const tableBody = document.querySelector(".table-body");
  let row = document.createElement("tr");
  row.setAttribute("data-title", book.title);

  let title = document.createElement("td");
  title.textContent = book.title;
  row.appendChild(title);

  let author = document.createElement("td");
  author.textContent = book.author;
  row.appendChild(author);

  let numberOfPages = document.createElement("td");
  numberOfPages.textContent = book.numberOfPages;
  row.appendChild(numberOfPages);

  let haveRead = document.createElement("td");
  haveRead.textContent = book.haveRead;
  row.appendChild(haveRead);

  let button = document.createElement("input");
  button.type = "button";
  button.value = "Delete";
  button.className = "submit-btn";
  button.onclick = function () {
    deleteBook(book.title);
  }; // set the onclick function
  row.appendChild(button);

  tableBody.appendChild(row);
};

const addToLibrary = (title, author, pages, status) => {
  let book = new BOOK(title, author, pages, status);
  library.push(book);
  addToShelf(book);
};

// book objects creation and adding to library
addToLibrary("A fault in our stars", "John Green", "365", "Read");
addToLibrary(
  "Harry Potter and the Goblet of fire",
  "JK Rowling",
  "525",
  "Read"
);

function formSubmit(event) {
  event.preventDefault();
  let title = document.forms[0]["title"].value;
  let author = document.forms[0]["author"].value;
  let pages = document.forms[0]["pages"].value;
  let status = document.forms[0]["status"].value;
  addToLibrary(title, author, pages, status);
  alert(`Adding Book ${title}!`);
}
