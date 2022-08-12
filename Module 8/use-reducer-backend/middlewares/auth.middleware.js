const authMiddleware = (request, response, next) => {
  const isLoggedIn = request.cookies.isLoggedIn;
  if (isLoggedIn) {
    next();
    // response.status(200).send("stopped here!");
  } else {
    response.status(403).send('User not logged in!');
  }
};

export default authMiddleware;
