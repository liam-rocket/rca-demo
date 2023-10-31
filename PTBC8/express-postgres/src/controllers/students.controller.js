/* eslint-disable import/extensions */
import pool from '../../initPool.js';

class StudentController {
  constructor() {
    this.pool = pool;
  }

  list = (req, res) => {
    const listStudentsQUery = 'SELECT * FROM students';

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

    // we want to avoid this, because it's not sequre
    // const sqlQuery = "INSERT INTO students (first_name, last_name, mobile, gender) VALUES ('Eric', 'Marsh', 874480753, true)"

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
    const { firstName, mobile } = req.body;
    const { id } = req.params;

    const dataToUpdateMapping = {
      first_name: firstName,
      mobile,
    };

    const dataToUpdateStr = Object.entries(dataToUpdateMapping)
      .map(([key]) => `${key} = $${key}`)
      .join(', ');

    const inputData = [firstName, mobile, id];

    const updateQuery = `UPDATE students SET ${dataToUpdateStr} WHERE id = $${id}`;

    this.pool.query(updateQuery, inputData, (error, result) => {
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
