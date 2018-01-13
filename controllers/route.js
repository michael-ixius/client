page('/', () => {
    app.Book.fetchAll().then(books => {
        app.bookListView.init(books)
    })
})
page('/books/new', () => {
    app.Book.fetchOne().then(book => {
        app.bookDetailView.init()
    })
})

page('/books/:id', () => app.bookCreateView.init())

page.start() 
