const port = 80,
  http = require("http"),
  app = http.createServer((request, response) => {
    console.log("Recieved an incoming request!");
    response.writeHead(httpStatus.OK, {
      "Content=Type": "text/html"
    });

    let responseMessage="<h1>Hello</h1>";
    response.write(responseMessage);
    response.end();
    console.log('Sent a response : ${responseMessage}');
  });

  app.listen(port);
  console.log('The server has strated and is listening on port number: %{port}');