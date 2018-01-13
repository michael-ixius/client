var app = app || {};

(module => {
    const bookDetailView= {}

    const $view = $('#book-detail-view')

    bookDetailView.init = () => {
        $('.page').hide()
        $view.show()
    }

    module.bookDetailView = bookDetailView

}) (app)