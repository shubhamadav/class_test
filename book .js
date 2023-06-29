// Sample book data
var books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
  ];
  
  // Function to render the book list
  function renderBookList() {
    var bookListDiv = document.getElementById('bookList');
    bookListDiv.innerHTML = '';
  
    books.forEach(function(book) {
      var bookDiv = document.createElement('div');
      bookDiv.className = 'book';
  
      var titleSpan = document.createElement('span');
      titleSpan.textContent = 'Title: ' + book.title;
      bookDiv.appendChild(titleSpan);
  
      var authorSpan = document.createElement('span');
      authorSpan.textContent = 'Author: ' + book.author;
      bookDiv.appendChild(authorSpan);
  
      var editIcon = document.createElement('span');
      editIcon.className = 'edit-icon';
      editIcon.textContent = '✎';
      editIcon.addEventListener('click', function() {
        populateEditForm(book);
      });
      bookDiv.appendChild(editIcon);
  
      var deleteIcon = document.createElement('span');
      deleteIcon.className = 'delete-icon';
      deleteIcon.textContent = '❌';
      deleteIcon.addEventListener('click', function() {
        deleteBook(book.id);
        bookDiv.remove();
      });
      bookDiv.appendChild(deleteIcon);
  
      bookListDiv.appendChild(bookDiv);
    });
  }
  
  // Function to populate the edit form with book details
  function populateEditForm(book) {
    var editForm = document.getElementById('editBookForm');
    var editBookId = document.getElementById('editBookId');
    var editTitle = document.getElementById('editTitle');
    var editAuthor = document.getElementById('editAuthor');
  
    editBookId.value = book.id;
    editTitle
  