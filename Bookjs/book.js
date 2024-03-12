// Selecting the elements to use..
const addBtn = document.querySelector('#add_btn');
const removeBtn = document.querySelector('#remove_btn');
const book_shelf1 = document.querySelector('#book_shelf1');
const book_shelf2 = document.querySelector('#book_shelf2');
const book_shelf3 = document.querySelector('#book_shelf3');
const numberDisplayDiv = document.querySelector('#numberDisplay');
const displayBtn = document.querySelector('#display_btn');

let bookCount = 0; // Track the total number of books
let currentShelf = 1; // Track the current shelf

function stackBook() {
  function updateDisplay() {
    // Update the bookshelves and display the current book count
    book_shelf1.textContent = currentShelf === 1 ? bookCount : '';
    book_shelf2.textContent = currentShelf === 2 ? bookCount : '';
    book_shelf3.textContent = currentShelf === 3 ? bookCount : '';
    numberDisplayDiv.textContent = bookCount;
    
    // Update remove button color based on book count
    removeBtn.style.color = bookCount > 0 ? 'black' : 'red';
  }

  function push() {
    // Check if all shelves are full
    if (bookCount === 30) {
      removeBtn.style.color = 'red'; // Set remove button color to red
      return;
    }

    // Add a book to the current shelf
    bookCount++;
    if (bookCount % 10 === 0) {
      // Move to the next shelf if the current one is full
      currentShelf = Math.min(currentShelf + 1, 3);
    }

    updateDisplay();
  }

  function pop() {
    // Check if there are any books to remove
    if (bookCount > 0) {
      bookCount--;

      // Move back to the previous shelf if the current one is empty
      if (bookCount % 10 === 9) {
        currentShelf = Math.max(currentShelf - 1, 1);
      }

      updateDisplay();
    }
  }

  function peek() {
    // Check the number of books in the shelves and display the output
    if (bookCount === 0) {
      numberDisplayDiv.style.color = 'red'; // Set display color to red
    } else {
      numberDisplayDiv.style.color = 'black'; // Set display color to black
    }

    updateDisplay();
  }

  // Adding event listeners outside the functions
  addBtn.addEventListener('click', push);
  removeBtn.addEventListener('click', pop);
  displayBtn.addEventListener('click', peek);

  // Initialize the display
  updateDisplay();
}

// Call the function to initialize
stackBook();



