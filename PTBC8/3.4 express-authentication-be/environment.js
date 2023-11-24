const dotenv = require('dotenv');
const path = require('path');

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });
