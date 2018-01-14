var app = app || {};

(module => {
    const bookCreateView= {}

    const $view = $('#book-create-view')

    bookCreateView.init = () => {
        $('.pages').hide();
        $view.show()
    }

    module.bookCreateView = bookCreateView

}) (app)