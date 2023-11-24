const authMiddleware = (request, response, next) => {
  const isLoggedIn = request.cookies.isLoggedIn;
  const user = request.cookies.user;
  if (isLoggedIn) {
    request.user = user;
    next();
  } else {
    response.status(403).send('User not logged in!');
  }
};

export default authMiddleware;
