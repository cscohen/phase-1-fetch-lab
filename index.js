function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(bookNames => {
    bookNames.forEach(book => {
      const div = document.getElementById('main')
      div.id = `book{book.id}`
      const p = document.createElement('h2')
      p.id = `book-title$ {book.id}`
      p.textContent = `
      Name: {book.name}
      `  
      //append list to dom adn create something to hold that data
      div.append(p)
      container.appendChild(div)

      renderBooks()
    })
  })

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
