var express = require('express');
var app = express();

app.use(express.static('assets'));
/*
app.get('/', function (req, res) {
    res.send('Hello world');
});
*/

app.get('/', function (req, res) {
    res.sendFile('./index.html');
});

app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

/*server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
            response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
});


function onRequest(request, response) {
    console.log("Odebrano zapytanie.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Pierwsze koty za płoty");
    response.end();
  }*/