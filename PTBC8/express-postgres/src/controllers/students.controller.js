/* eslint-disable import/extensions */
import pool from '../../initPool.js';

class StudentController {
  constructor() {
    this.pool = pool;
  }

  list = (req, res) => {
    const { id } = req.params;

    const listStudentsQUery = `SELECT * FROM students WHERE id = ${id}`;

    this.pool.query(listStudentsQUery, (error, result) => {
      if (error) {
        console.log(error);
        res.status(501).send('error!');
        return;
      }

      console.log(result.rows);
      res.status(200).json({ success: true, data: result.rows });
    });
  };

  // todo: returning
  add = (req, res) => {
    const { firstName, lastName, mobile, gender } = req.body;

    // we want to avoid this, because it's not sequre                                         Jane          Doe         123123        ture
    // const sqlQuery = `INSERT INTO students (first_name, last_name, mobile, gender) VALUES (${firstName}, ${lastName}, ${mobile}, ${gender})`;
    // const sqlQuery = `INSERT INTO students (first_name, last_name, mobile, gender) VALUES (Jane, Doe, 123456, true)`;

    const inputData = [firstName, lastName, mobile, gender];

    const insertStudentsQuery =
      'INSERT INTO students (first_name, last_name, mobile, gender) VALUES ($1, $2, $3, $4)';

    this.pool.query(insertStudentsQuery, inputData, (error, result) => {
      if (error) {
        console.log(error);
        res.status(501).send('error!');
        return;
      }

      console.log(result.rows);
      res
        .status(200)
        .json({ success: true, message: 'successfully added new student' });
    });
  };

  edit = (req, res) => {
    const data = req.body;
    const { id } = req.params;

    const dataToUpdateStr = Object.entries(data)
      .map(([key], index) => `${key} = $${index + 1}`)
      .join(', ');

    const inputData = Object.entries(data).map(([, val]) => val);

    const updateQuery = `UPDATE students SET ${dataToUpdateStr} WHERE id = $${id}`;

    this.pool.query(updateQuery, [...inputData, id], (error, result) => {
      if (error) {
        console.log(error);
        res.status(501).send('error!');
        return;
      }

      console.log(result.rows);
      res
        .status(200)
        .json({ success: true, message: 'successfully edited student' });
    });
  };

  delete = async (req, res) => {
    const { id } = req.params;

    const deleteQuery = 'DELETE FROM students WHERE id = $1';

    this.pool.query(deleteQuery, [id], (error, result) => {
      if (error) {
        console.log(error);
        res.status(501).send('error!');
        return;
      }

      console.log(result.rows);
      res
        .status(200)
        .json({ success: true, message: 'successfully deleted student' });
    });
  };
}

export default StudentController;
