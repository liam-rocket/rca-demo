import dotenv from 'dotenv';
import path from 'path';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });
