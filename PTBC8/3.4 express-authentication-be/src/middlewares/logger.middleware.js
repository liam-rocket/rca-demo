const myLogger = (req, res, next) => {
  console.log('LOGGED');
  // Call the next parameter to trigger the next middleware
  next();
};

module.exports = myLogger;

/**
 *
 *
 * GET - localhost:3000 -> middleware -> actual handle of the route
 *
 */
