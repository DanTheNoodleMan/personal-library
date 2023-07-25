function Book(name, author, pages, read) {
    // the constructor...
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let myLibrary = [];
let nBooks = myLibrary.length;

let bookContainer = document.querySelectorAll('.books-container');

let removeBook = document.querySelectorAll('.book-remove');
let bookCards = document.querySelectorAll('.book-card');
let bookRead = document.querySelectorAll('.book-read');

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
    let bookRead = document.getElementById("read");
    if(bookRead.checked) {
        bookRead = true;
    } else {
        bookRead = false;
    }
    const newBook = new Book(bookName, bookAuthor, bookPages, bookRead);
    console.log(newBook);

    myLibrary.push(newBook);
    console.log(myLibrary);

    updateLibrary(newBook);
}   

let containerLevel = 1;

function updateLibrary(newBook) {
    // create a card for each book
    bookCard = document.createElement('div');
    bookTitle = document.createElement('h2');
    bookRemove = document.createElement('button');
    bookRead = document.createElement('input');

    bookCard.classList.add('book-card');
    bookTitle.classList.add('book-title');
    bookRemove.classList.add('book-remove');
    bookRead.classList.add('book-read');

    bookTitle.textContent = newBook.name;
    bookRemove.textContent = '×';
    bookRead.checked = newBook.read;

    bookCard.setAttribute('data-index', myLibrary.indexOf(newBook));
    bookRemove.setAttribute('type', 'submit');
    bookRemove.setAttribute('onclick', 'removeBookFromLibrary(event)');
    bookRead.setAttribute('type', 'checkbox');
    bookRead.setAttribute('onclick', 'toggleRead(event)');

    //adds books to the shelves from top to bottom, if the top shelf is full, it goes to the next one. If a shelf has an empty slot, it goes there first before going to the next shelf.
    switch(true) {
        case (bookContainer[0].childElementCount < 6):
            bookContainer[0].appendChild(bookCard);
            break;
        case (bookContainer[1].childElementCount < 6):
            bookContainer[1].appendChild(bookCard);
            break;
        case (bookContainer[2].childElementCount < 6):
            bookContainer[2].appendChild(bookCard);
            break;
        case (bookContainer[3].childElementCount < 6):
            bookContainer[3].appendChild(bookCard);
            break;
    }

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookRemove);
    bookCard.appendChild(bookRead);

    removeBook = document.querySelectorAll('.book-remove');
    bookCards = document.querySelectorAll('.book-card');
    readBook = document.querySelectorAll('.book-read');

    nBooks = myLibrary.length;
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

    nBooks = myLibrary.length;
}

function toggleRead(event) {
    let bookIndex = event.target.parentNode.getAttribute('data-index');
    myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
    bookRead.checked = myLibrary[bookIndex].read;
    console.log(myLibrary[bookIndex]);
}