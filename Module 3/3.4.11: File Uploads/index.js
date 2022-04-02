/* eslint-disable import/extensions */
import axios from 'axios';
import express from 'express';
import multer from 'multer';
import path from 'path';
import dotenv from 'dotenv';
import pool from './initPool.js';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const accessKey = process.env.UNSPLASH_ACCESS_KEY;
const secretKey = process.env.UNSPLASH_SECRET_KEY;

const apiUrl = 'https://api.unsplash.com';

// todo: set the name of the upload directory here

const multerUpload = multer({ dest: 'uploads/' });
const singleFileUpload = multerUpload.single('photo');

// * Save file with original filename ie. hello.jpg
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, 'uploads/');
//   },
//   filename: (req, file, callback) => {
//     callback(null, file.originalname);
//   },
// });

// const upload = multer({ storage });
// const singleFileUpload = upload.single('photo');

// * Multiple file uploads
const multipleFileUpload = multerUpload.array('photos', 5);

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('uploads'));

app.get('/recipe', (request, response) => {
  response.render('upload');
});

// todo: add multer middleware
app.post('/recipe', singleFileUpload, (request, response) => {
  console.log(request.file);

  const sqlQuery =
    'INSERT INTO recipes (label, photo) VALUES ($1, $2) RETURNING *';
  // get the photo column value from request.file
  const values = [request.body.label, request.file.originalname];

  // Query using pg.Pool instead of pg.Client
  pool.query(sqlQuery, values, (error, result) => {
    if (error) {
      console.log('Error executing query', error.stack);
      response.status(503).send('Something went wrong');
      return;
    }
    response.send(result.rows);
  });
});

// todo: add multer middleware
app.post('/recipe/multiple', multipleFileUpload, (request, response) => {
  console.log(request.files);

  const { files } = request;

  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const sqlQuery =
      'INSERT INTO recipes (label, photo) VALUES ($1, $2) RETURNING *';
    // get the photo column value from request.file
    const values = [file.label, file.filename];

    // Query using pg.Pool instead of pg.Client
    pool.query(sqlQuery, values, (error) => {
      if (error) {
        console.log('Error executing query', error.stack);
        response.status(503).send('Something went wrong');
      }
    });
  }
  response.send(`Uploaded ${files.length} files`);
});

app.get('/recipe/:id', async (request, response) => {
  const image = await axios.get(`${apiUrl}/photos/random`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });

  const regularImageUrl = image.data.urls.regular;
  const data = {
    recipe: {
      photo: regularImageUrl,
    },
  };
  response.render('recipe', data);

  // const sqlQuery = 'SELECT * FROM recipes WHERE id=$1;';
  // const values = [request.params.id];
  // // Query using pg.Pool instead of pg.Client
  // pool.query(sqlQuery, values, (error, result) => {
  //   if (error) {
  //     console.log(error);
  //     // console.log('Error executing query', error.stack);
  //     response.status(503).send(error.message);
  //     return;
  //   }
  //   const data = {
  //     recipe: result.rows[0],
  //   };
  //   response.render('recipe', data);
  // });
});

app.listen(3004);
