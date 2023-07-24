function Book(name, author, pages, read) {
    // the constructor...
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // do stuff here

}

const memoirsGeisha = new Book('Memoirs of a Geisha', 'Arthur Golden', 448, true);
const harryPotter = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 223, true);
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310, true);

let myLibrary = [memoirsGeisha, harryPotter, theHobbit];

let bookContainer = document.querySelector('.book-container');

function render() {
    // do stuff here
    myLibrary.forEach((book) => {
        // create a card for each book
        bookCard = document.createElement('div');
        bookCard.textContent = book.name;
        bookCard.classList.add('book-card');
        bookContainer.appendChild(bookCard);
        console.log(book);
    });
}

render();