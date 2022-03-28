import express from 'express';
import multer from 'multer';

import pool from './initPool.js';

// todo: set the name of the upload directory here

const multerUpload = multer({ dest: 'uploads/' });
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, 'uploads/');
//   },
//   filename: (req, file, callback) => {
//     callback(null, file.originalname);
//   },
// });
const singleFileUpload = multerUpload.single('photo');
// const upload = multer({ storage });
// const singleFileUpload = upload.single('photo');
// const multipleFileUpload = multerUpload.array('photos', 5);

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('uploads'));

app.get('/recipe', (request, response) => {
  response.render('upload');
});

// todo: add multer middleware
app.post('/recipe', singleFileUpload, (request, response) => {
  console.log(request.file);
  //   response.send('worked');

  const sqlQuery =
    'INSERT INTO recipes (label, photo) VALUES ($1, $2) RETURNING *';
  // get the photo column value from request.file
  const values = [request.body.label, request.file.filename];

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

app.get('/recipe/:id', (request, response) => {
  const sqlQuery = 'SELECT * FROM recipes WHERE id=$1;';
  const values = [request.params.id];

  // Query using pg.Pool instead of pg.Client
  pool.query(sqlQuery, values, (error, result) => {
    if (error) {
      console.log('Error executing query', error.stack);
      response.status(503).send(error.message);
      return;
    }
    const data = {
      recipe: result.rows[0],
    };
    response.render('recipe', data);
  });
});

app.listen(3004);
