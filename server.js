// var http = require('http')
var port = process.env.PORT || 1337;
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n');
// }).listen(port);
// console.log(port);

const express = require('express');
const app = express();
const routes = require('./Configuration/Routes');
routes.setRoutes(app);


app.use(require('body-parser').json());
app.use(express.static(__dirname + '/static'));

app.listen(port, () => console.log(`Listening on port ${port}`));