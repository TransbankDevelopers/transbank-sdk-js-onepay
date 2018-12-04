var http = require('http');
var fs = require('fs');

function responseFile(file, response) {
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
        throw err; 
    }
    response.writeHeader(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.write(data, 'utf-8');
    response.end();
  });
}

function responseJson(obj, response) {
  response.writeHeader(200, {'Content-Type': 'application/json'});
  response.write(JSON.stringify(obj));
  response.end();
}

var server = http.createServer(function (request, response) {

  var path = request.url;
  let body = [];

  request.on('error', (err) => {

    console.error(err);

  }).on('data', (chunk) => {

    body.push(chunk);

  }).on('end', () => {

    body = Buffer.concat(body).toString();
    console.log('path', path, 'body', body);

    if (path == '/') {

      responseFile('./index.html', response);

    } else if (path.includes('merchant.onepay.js')) {

      responseFile('../lib/merchant.onepay.js', response);
  
    } else if (path.includes('checkout.html')) {

      responseFile('../html/checkout.html', response);

    } else if (path.includes('checkout.onepay.min.js')) {

      responseFile('../lib/checkout.onepay.min.js', response);

    } else if (path.includes('endpoint_ok')) {

      var obj = {
        'externalUniqueNumber':'38bab443-c55b-4d4e-86fa-8b9f4a2d2d13',
        'amount': 3,
        'qrCodeAsBase64':'iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAADmElEQVR42u3dQZLCMAxFQd//0nACdjb6kvpVzY5iSOJmocLJ+Uj62XEKJEAkQCRAJEAkQCRAJEAkQCRAJAEiASIBIgEiASIBIgEiASIBIgEiCRAJEAkQCRBpC5BzTou/18db9XrXCxBAAAEEEEAAAQQQQAABBBBAAAHkxYJJ+zxpC/j1/+1+vQABBBBAAAEEEEAAAQQQQAABBBBAahfkrTHgNrCuFyCAAAIIIIAAAggggAACCCBOOCCAbDjhVZ8n7X0AAQQQQAABBBBAAAEEEEAAAQQQQADpeMK7/ygREEAAcb0AAQQQQAABBBBAAAEEEEAASTnAigXweiG9vsGaLbeAAAIIIIAAAggggAACCCCAAAIIIB1vp+/1Hn8ACCCAAAIIIIAAAggggAACCCCAbAAytbQxbNp4dsQ1dgoAESCACBBAAAEEEEAAAQSQRUC6jG2nbh2dOu4GBBBAAAEEEEAAAQQQQAABBBBAADG2TX58wOvj7bSAAQEEEEAAAQQQQAABBBBAAAEEEEDqFmTawkt7vELaQz/TvqAAAQQQQAABBBBAAAEEEEAAAQQQQP4DIe39ty0MW3oBAQQQQAABBBBAAAEEEEAAAQQQQBJupDb18QppW5InAAQEEEAAAQQQQAABBBBAAAEEEEAAOcaboePlqtcb8wICCCCAAAIIIIAAAggggAACCCCZQKaOPbuMu9O+6Gy5BQQQQAABBBBAAAEEEEAAAQQQQHoB6TJmrBpfpz0uoer6AgIIIIAAAggggAACCCCAAAIIIID0GvMCexdsl63KgAACCCCAAAIIIIAAAggggAACCCBKGG9W3Ziuy9gZEEAAAQQQQAABBBBAAAEEEEAAAaR2gU19PEHVwtt2vIAAAggggAACCCCAAAIIIIAAAgggd4GkjW2r3r/7jddsuQUEEEAAAQQQQAABBBBAAAEEEEB2Aukytu3+ebaNzQEBBBBAAAEEEEAAAQQQQACxIAEBZCeQtAuadkO8CTeUAwQQQAABBBBAAAEEEEAAAQQQQACZC+TWcb1+/23wAQEEEEAAAQQQQAABBBBAAAEEEEByD7DDGHPq55+wFRcQQAABBBBAAAEEEEAAAQQQQAABZN8W0S43rHt9XH6sCAgggAACCCCAAAIIIIAAAggggGQCkboGiASIBIgEiASIBIgEiASIBIgEiCRAJEAkQCRAJEAkQCRAJEAkQCRAJAEiASIBIgEiJfQFpubg+AJXeZoAAAAASUVORK5CYII=',
        'issuedAt':1534216134,
        'occ':'1808534370011282',
        'ott':89435749
      };

      responseJson(obj, response);
  
    } else if (path.includes('endpoint_error')) {
        
      responseJson({}, response);
  
    } else if (path.includes('callback')) {
        
      response.writeHeader(200, {'Content-Type': 'text/html'});
      response.write('success: ' +  JSON.stringify(body));
      response.end();
  
    } else {
  
      response.writeHeader(404, {'Content-Type': 'text/html'});
      response.write('Not found');
      response.end();
    }
  });
});

server.listen(8089);
console.log('Listening in: http://localhost:8089');