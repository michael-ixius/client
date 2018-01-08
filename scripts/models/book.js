var __API_URL__ = 'https://mb-ip-booklist.herokuapp.com';

function Books() {
    
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }
 
  Books.all = [];

  Books.fetchAll = callback => {
    $.get('/books_app')
      .then(results => {
        Books.loadAll(results);
        callback();
      })
  };

  Books.loadAll = rawData => {
    Books.all = rawData.map(i => new Books(i));
  };

Books.initpage = () =>{
  var template = Handlebars.compile($('#books-template').text());
  Books.forEach(book => $('.book-template').append(authStatTemplate(book)));
 


};
