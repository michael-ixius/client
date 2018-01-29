var app = app || {};

(module => {
    const bookCreateView= {}

    const $view = $('#book-create-view')

    bookCreateView.init = () => {
        $('.pages').hide();
        $view.show()

        $('#new-book-form').on('submit', (event) => {
            event.preventDefault();
            var bookData = {
                title: $('#title').val(),
                author: $('#cauthor').val(),
                isnb: $('#isbn').val(),
                image_url: $('#image-url').val(),
                description: $('#description').val(),
            }
            app.Book.create(bookData).then(result => {
                console.log(result);
                page('/');
            })
            $('#title').val('');
            $('#author').val('');
            $('#isbn').val('');
            $('#image-url').val('');
            $('#description').val('');
        })
    }
    module.bookCreateView = bookCreateView

})(app)