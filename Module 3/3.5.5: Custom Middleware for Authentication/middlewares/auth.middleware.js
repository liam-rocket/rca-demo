import { getHashWithSalt } from "../hash.js";

const authMiddleware = (request, response, next) => {
  const userId = request.cookies.userId;
  const loggedInHash = request.cookies.loggedInHash;

  if (loggedInHash && userId) {
    // get the hased value that should be inside the cookie
    const hashedString = getHashWithSalt(userId);

    // use the user id to query the user table AND the company table

    // test the value of the cookie
    if (loggedInHash === hashedString) {
      request.userId = userId;
      next();
      // response.status(200).send("stopped here!");
    } else {
      response.status(403).send("User not logged in!");
    }
  }
};

export default authMiddleware;
