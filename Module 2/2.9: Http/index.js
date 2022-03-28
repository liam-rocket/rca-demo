// createServer comes from the http module built-in to Node.
import { createServer } from "http";
const handleIncomingRequest = (request, response) => {
  console.log("Received request!");

  response.status(200);
};
// createServer creates the server object. It accepts a request listener function.
// The server calls the function every time it receives a request.
// The listen method tells server to start listening for requests on given port.
createServer(handleIncomingRequest).listen(3004);
