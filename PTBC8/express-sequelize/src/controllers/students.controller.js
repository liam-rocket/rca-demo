class StudentController {
  constructor(db) {
    this.db = db;
  }

  list = async (req, res) => {};

  get = async (req, res) => {};

  add = async (req, res) => {};

  edit = async (req, res) => {
    const dataToUpdateStr = Object.entries(data)
      .map(([key], index) => `${key} = $${index + 1}`)
      .join(', ');

    const updateQuery = `UPDATE students SET ${dataToUpdateStr} WHERE id = $${id}`;

    const inputData = Object.entries(data).map(([, val]) => val);

    console.log('updateQuery: ', updateQuery);

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

  delete = async (req, res) => {};
}

module.exports = StudentController;
