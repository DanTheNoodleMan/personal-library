function Book(name, author, pages, read) {
    // the constructor...
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const memoirsGeisha = new Book('Memoirs of a Geisha', 'Arthur Golden', 448, true);
const harryPotter = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 223, true);
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310, true);

let myLibrary = [];

let bookContainer = document.querySelector('.book-container');

function isObjDup(newBook){
    return myLibrary.some((book) => newBook.name === book.name);
}

// function render(newBook = null) {
//     // do stuff here
//     myLibrary.forEach((book) => {
//         // create a card for each book
//         bookCard = document.createElement('div');
//         bookTitle = document.createElement('h2');

//         bookCard.classList.add('book-card');
//         bookTitle.classList.add('book-title');
//         bookTitle.textContent = book.name;

//         bookContainer.appendChild(bookCard);
//         bookCard.appendChild(bookTitle);
//     });
// }

// render();


const form = document.querySelector(".form-add");

form.addEventListener("submit", addBookToLibrary);

function addBookToLibrary(event) {
    event.preventDefault();

    let bookName = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    let bookRead = document.getElementById("read").value;
    const newBook = new Book(bookName, bookAuthor, bookPages, bookRead);
    console.log(newBook);

    myLibrary.push(newBook);
    console.log(myLibrary);

    updateLibrary(newBook);
}   

function updateLibrary(newBook) {
    // create a card for each book
    bookCard = document.createElement('div');
    bookTitle = document.createElement('h2');

    bookCard.classList.add('book-card');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = newBook.name;

    bookContainer.appendChild(bookCard);
    bookCard.appendChild(bookTitle);
}