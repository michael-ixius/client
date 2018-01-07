var __API_URL__ = 'https://mb-ip-booklist.herokuapp.com';

function Books() {
    
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }
 
  Article.all = [];