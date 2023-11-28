const jwt = require('jsonwebtoken');

const JWT_SECRET = 'secret';

const signed = jwt.sign({ foo: 'bar' }, JWT_SECRET);

console.log('signed: ', signed);

const verify = jwt.verify(signed, JWT_SECRET);

console.log('verify: ', verify);
