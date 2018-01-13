page('/', () => {
    app.Book.fetchAll().then(books => {
        app.bookListView.init(books)
    })
})
// page('/books/new', () => {
//     app.Book.fetchOne().then(book => {
//         app.bookDetailView.init()
//     })
// })

page('/books/:id', (ctx) => {
    console.log('thing',ctx.params.id)
    app.Book.fetchOne(ctx.params.id).then(book => {
    app.bookDetailView.init(book)
})
})

page.start() 
