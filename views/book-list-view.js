var app = app || {};

(module => {
    const bookListView= {}

    const $view = $('#book-list-view')

    bookListView.init = (books) => {

        books.forEach(bookData =>{
        $('#book-list').append(`<li>${bookData.title}:${bookData.author}</li>`)
    })
        console.log('books', books)
        $('.page').hide()
        $view.show()
    }

    module.bookListView = bookListView

}) (app)