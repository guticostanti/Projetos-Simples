const http = require('http');

http.createServer((request, response) => {

    response.writeHead(200, {'content-type': 'text/plain'});
    response.end("Hello World!");

}).listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Servidor rodando na porta 3000");
    }
})