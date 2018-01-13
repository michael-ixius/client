var app = app || {};

(module => {
    const bookDetailView= {}
    $('.page').hide()

    const $view = $('#book-detail-view')

    bookDetailView.init = (bookData) => {
        
        $view.append(`<h1>${bookData.title}</h1>`)
        $view.show()
    }

    module.bookDetailView = bookDetailView

}) (app)