const myLogger = (req, res, next) => {
  console.log('LOGGED');
  // Call the next parameter to trigger the next middleware
  next();
};

export default myLogger;
