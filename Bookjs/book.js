
const main = document.querySelector('main');
const addBtn = main.querySelector('#add_btn');
const removeBtn = main.querySelector('#remove_btn');
const displayBtn = main.querySelector('#display_btn');
const numberDisplay = main.querySelector('#numberDisplay');

// Creating a class of stack. It has methods to push, pop, and peek.
class BookStack {
    constructor() {
        this.books = [];
        this.bookShelf = document.getElementById('book_shelf');
    }

    push() {
        const book = document.createElement('div');
        book.setAttribute('id', 'book');
        this.books.push(book);
        this.bookShelf.appendChild(book);
        this.animatePush(book);
    }

    pop() {
        if (this.books.length > 0) {
            const poppedBook = this.books.pop();
            this.animatePop(poppedBook);
        } else {
            console.log('No books to remove.');
        }
    }

    peek() {
        return this.books.length;
    }

    animatePush(book) {
        // Add CSS animation for pushing a book
        book.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            book.style.transform = 'translateY(0)';
        }, 500); // Adjust the duration as needed
    }

    animatePop(book) {
        // Add CSS animation for popping a book
        book.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            book.style.display = 'none';
        }, 500); // Adjust the duration as needed
    }
}

const bookStack = new BookStack();

// Event listeners for buttons
addBtn.addEventListener('click', () => bookStack.push());
removeBtn.addEventListener('click', () => bookStack.pop());
displayBtn.addEventListener('click', () => numberDisplay.textContent = bookStack.peek());

