var app = app || {};

(module => {
    const bookDetailView= {};




    bookDetailView.init = (bookData) => {
        let $view = $('#book-details-template').html();
        let template = Handlebars.compile($view);
        
        // $view.append(`<h1>${bookData.title}</h1>`)

        console.log('hi',bookData)
        // let template = Handlebars.compile($('#book-details-template').text());

        
        console.log('inside',bookData)
        $('#book-detail-view').empty().append(template(bookData));
        
        
        
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