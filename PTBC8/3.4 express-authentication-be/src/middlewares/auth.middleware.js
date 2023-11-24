// eslint-disable-next-line import/no-unresolved
const { auth } = require('express-oauth2-jwt-bearer');

const authMiddleware = auth({
  audience: 'https://students/api',
  issuerBaseURL: 'https://dev-kj25avk6bih6mjav.us.auth0.com/',
  tokenSigningAlg: 'RS256',
});

module.exports = authMiddleware;
