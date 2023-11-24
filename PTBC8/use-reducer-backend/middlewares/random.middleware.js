const randomMiddleware = async (req, res, next) => {
  console.log('this is a random middleware');
  next();
};

export default randomMiddleware;
