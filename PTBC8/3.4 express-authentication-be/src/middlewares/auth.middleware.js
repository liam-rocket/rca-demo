// eslint-disable-next-line import/no-unresolved
const { auth } = require('express-oauth2-jwt-bearer');

const authMiddleware = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256',
});

module.exports = authMiddleware;
