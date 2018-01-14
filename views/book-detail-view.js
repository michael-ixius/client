var app = app || {};

(module => {
    const bookDetailView= {}


    const $view = $('#book-detail-view')

    bookDetailView.init = (bookData) => {

        $view.append(`<h1>${bookData.title}</h1>`)

        if(!localStorage.getItem('token')){
            $page.find('protected').hide
        }

        $view.show()

        $view.off()

        $view.on('click','#delete-btn', () => {
            app.Book.deleteOne(book.book_id).then(() => page('/'))
        })
    }

    module.bookDetailView = bookDetailView

}) (app)