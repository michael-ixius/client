var app = app || {};

(module => {
    const bookDetailView= {};




    bookDetailView.init = (bookData) => {
        let $view = $('#book-details-template').html();
        let template = Handlebars.compile($view);
        
        console.log('success',bookData)
        $('#book-detail-view').empty().append(template(bookData));

        // $('#book-detail-view').on('click', () =>{
        //     app.Book.updateOne(book.book_id).then(() => page('/'))
        // })
        
        
        // if(!localStorage.getItem('token')){
        //     $page.find('protected').hide
        // }

        $('#book-detail-view').show();

        $('#book-detail-view').off()

        // $view.on('click','#delete-btn', () => {
        //     app.Book.deleteOne(book.book_id).then(() => page('/'))
        // })
    }

    module.bookDetailView = bookDetailView

}) (app)