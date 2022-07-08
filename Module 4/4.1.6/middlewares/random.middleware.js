const randomMiddleware = async (request, response, next) => {
  console.log('this is a random middleware');
  next();
};

export default randomMiddleware;
