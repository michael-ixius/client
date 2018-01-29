var app = app || {};


(module =>  {

  const __API_URL__ = 'https://mb-ip-booklist.herokuapp.com/api/v1/books';



//   $.getJSON(__API_URL__).then(books => {
//     console.log(books);
//     books.forEach(bookData =>{
//         $('#book-list').append(`<li>${bookData.title}</li>`)
//     })
// })
  function errorCallback(err) {
    console.error(err)
    module.errorView.initErrorPage(err)
  }

  const Book = {}

  Book.all = []

Book.fetchAll = () => $.getJSON(__API_URL__).catch(errorCallback)

Book.fetchOne = (id) => $.getJSON(__API_URL__ + '/' + id).catch(errorCallback)

Book.destroy = id => {
  return $.ajax({
    url: __API_URL__ + '/' + id,
    method: 'DELETE'
  }).catch(errorCallback)
}

Book.update = book => {
  return $.ajax({
    url: __API_URL__ + '/' + book.book_id,
    method: 'PUT',
    data: book
  }).catch(errorCallback)
}

Book.create = book => $.post(__API_URL__, book);
  
  




module.Book = Book
})(app)