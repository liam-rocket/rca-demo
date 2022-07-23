import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import methodOverride from 'method-override';

import bindRoutes from './routes.mjs';

// Initialise Express instance
const app = express();
// Set the Express view engine to expect EJS templates
app.set('view engine', 'ejs');
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
app.use(express.urlencoded({ extended: false }));
// Bind Express middleware to parse JSON request bodies
app.use(express.json());
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
app.use(methodOverride('_method'));
// Expose the files stored in the public folder
app.use(express.static('public'));
// Expose the files stored in the distribution folder
app.use(express.static('dist'));
app.use(cors());

// Bind route definitions to the Express application
bindRoutes(app);

// Set Express to listen on the given port
const PORT = process.env.PORT || 3004;
app.listen(PORT);

console.log(`🚀 App listening on the port ${PORT}`);

/**
 *
 * deleted:
 *
 * 1. src
 * 2. public
 * 3. webpack_conf
 * 4. .github
 * 5. .git
 * 6. all webpack code
 *
 */
