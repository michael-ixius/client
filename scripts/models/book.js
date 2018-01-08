var __API_URL__ = 'https://mb-ip-booklist.herokuapp.com';

books.all = [];

// books.prototype.toHtml = function() {
//   var template = Handlebars.compile($('#books-template').text());

//   this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
//   this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
//   this.body = marked(this.body);

//   return template(this);
// };

books_app.loadAll = bookData => {

  bookData.forEach(bookObject => book.all.push(new Article(articleObject)))
};

books.fetchAll = callback => {
  $.get('/index')
    .then(results => {
      Article.loadAll(results);
      callback();
    }
  )
};