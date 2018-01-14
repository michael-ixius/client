var app = app || {};

(module => {
    const bookListView= {}

    const $view = $('#book-list-view')

    bookListView.init = (books) => {
        // $('li').attr('class', 'book-info')
        $('#book-list').empty();
        books.forEach(bookData =>{
    
        $('#book-list').append(`<li data-id="${bookData.book_id}">${bookData.title}:${bookData.author}</li>`)
    })

    $('#book-list').off().on('click', 'li', (event) => {
        const id = $(event.target).data('id')
        page('/books/' + id)
    })
    
       
        $view.show()
    }

    module.bookListView = bookListView

}) (app)