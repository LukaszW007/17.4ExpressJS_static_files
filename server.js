var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('assets'));
/*
app.get('/', function (req, res) {
    res.send('Hello world');
});
*/
app.get('/first-template', function (req, res) {
    res.render('first-template');
});
app.get('/log-template', function (req, res) {
    res.render('log-template');
});
app.get('/auth/google', function (req, res) {
    const response = {
        login: req.query.login,
        password: req.query.password
    };
    //res.render(response);
    res.end(JSON.stringify(response))
});

app.get('/', function (req, res) {
    res.sendFile('./index.html');
});

app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));                  //Co oznacza metoda end? jakie sa metody wyswietlania oprocz sendFile i render?
});

var server = app.listen(3000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
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