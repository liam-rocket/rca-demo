import path from "path";
import dotenv from "dotenv";

const envFilePath = ".env";
dotenv.config({ path: path.normalize(envFilePath) });

const userId = process.env.MY_ENV_VAR;
console.log(process.env);
console.log(userId);

/**
 *
 * Instructions to run:
 *
 * 1. install dotenv
 * 2. create a .env file
 * 3. update your envFilePath variable to point to your .env file
 * 4. create the environment variables in the .env file (ie. MY_ENV_VAR=hello)
 * 5. access your environment variables via process.env.<your-env-var>
 *
 */
