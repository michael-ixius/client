var app = app || {};

(module => {
    const bookCreateView= {}

    const $view = $('#book-create-view')

    bookCreateView.init = () => {
        $('.page').hide()
        $view.show()
    }

    module.bookCreateView = bookCreateView

}) (app)