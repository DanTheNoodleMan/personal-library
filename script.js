function Book(name, author, pages, read) {
    // the constructor...
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let idCount = 0;

let myLibrary = [];


let bookContainer = document.querySelector('.books-container');

let removeBook = document.querySelectorAll('.book-remove');
let bookCards = document.querySelectorAll('.book-card');

function isObjDup(newBook){
    return myLibrary.some((book) => newBook.name === book.name);
}

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
    bookRemove = document.createElement('button');

    bookCard.classList.add('book-card');
    bookTitle.classList.add('book-title');
    bookRemove.classList.add('book-remove');
    bookTitle.textContent = newBook.name;
    bookRemove.textContent = '×';

    bookCard.setAttribute('data-index', myLibrary.indexOf(newBook));
    bookRemove.setAttribute('type', 'submit');
    bookRemove.setAttribute('onclick', 'removeBookFromLibrary(event)');

    bookContainer.appendChild(bookCard);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookRemove);

    removeBook = document.querySelectorAll('.book-remove');
    bookCards = document.querySelectorAll('.book-card');
}

function removeBookFromLibrary(event) {
    event.preventDefault();
    // remove book from library
    // remove book from DOM
    let bookIndex = event.target.parentNode.getAttribute('data-index');
    myLibrary.splice(bookIndex, 1);
    event.target.parentNode.remove();
    bookCards = document.querySelectorAll('.book-card'); //get uptaded bookCards

    console.log(myLibrary);

    for(let i = 0; i < myLibrary.length; i++) {
        bookCards[i].setAttribute('data-index', i);
    }
}