const helloMiddleware = (request, response, next) => {
  console.log("hello! ", request.userId);
  next();
};

export default helloMiddleware;
