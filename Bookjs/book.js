
// Assuming you have these elements somewhere in your HTML
const bookShelfDiv = document.querySelector('#book_shelf');
const addBtn = document.querySelector('#add_btn');
const removeBtn = document.querySelector('#remove_btn');
const numberDisplayDiv = document.querySelector('#numberDisplay');
const displayBtn = document.querySelector('#display_btn');

function stackBook() {
  const book = document.createElement('div');
  book.classList.add('book');
  
  const push = () => {
    if (bookShelfDiv.children.length < 10) {
      bookShelfDiv.appendChild(book);
    }
  };

  const pop = () => {
    if (bookShelfDiv.children.length > 0) {
      bookShelfDiv.removeChild(bookShelfDiv.children[bookShelfDiv.children.length - 1]);
    }

    if (bookShelfDiv.children.length === 0) {
      numberDisplayDiv.style.backgroundColor = 'red';
    }
  };

  const peek = () => {
    numberDisplayDiv.textContent = bookShelfDiv.children.length;
  };

  // Adding event listeners outside the functions
  addBtn.addEventListener('click', push);
  removeBtn.addEventListener('click', pop);
  displayBtn.addEventListener('click', peek);
}

// Call the function to initialize
stackBook();

