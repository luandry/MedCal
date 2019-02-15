//sets a simple server up

var http = require('http');

function handleRequest(request, response){
  response.write('Hello World');
  response.end();
}

var server = http.createServer(handleRequest);
server.listen(3000);
//3000 is the port number
