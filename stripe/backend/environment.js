const path = require('path');
const dotenv = require('dotenv');

const ENV_FILE = '.env';

dotenv.config({ path: path.normalize(ENV_FILE) });
