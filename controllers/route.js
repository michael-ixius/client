page('/*', (ctx,next) => {
    console.log('I made it')
    if(localStorage.getItem('token')){
        $('.protected').show()
    } else{
        $('.protected').hide()
    }


    $('.page').hide()
    next()

})
page('/', () => {
    app.Book.fetchAll().then(books => {
        app.bookListView.init(books)
    })
})
page('/books/new', () => app.bookCreateView.init())

page('/books/:id', (ctx) => {
console.log(ctx.params.id)
    app.Book.fetchOne(ctx.params.id).then(book => {
        console.log(book)
    app.bookDetailView.init(book)
    
})
})

page.start() 
