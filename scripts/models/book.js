var __API_URL__ = 'https://mb-ip-booklist.herokuapp.com';

$.getJSON(`__API_URL`).then(result => {
  result.forEach(dataPoint => {
    $('#data-import').append('<li>${dataPoint.row[0]}</li>')})
  })