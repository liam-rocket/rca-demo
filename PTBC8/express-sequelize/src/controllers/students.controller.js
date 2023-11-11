class StudentController {
  constructor(db) {
    this.db = db;
  }

  // list all the students in the database
  list = async (req, res) => {
    // const students = await this.db.students.findAll({ where: { ...your conditions can go here too }});
    const students = await this.db.students.findAll(); // select * from students;
    res.status(200).json(students);
  };

  get = async (req, res) => {
    const { id } = req.params;
    // const student = await this.db.students.findByPk(id) <-- this one takes in the primary key as param, and searches by PK
    const student = await this.db.students.findOne({
      where: { id }, // the student id
      include: [
        {
          model: this.db.studentAddresses, // select * from students JOIN student_addresses WHERE students.id = student_addresses.student_id;
          // where: {
          //   student_id: 2,
          // },
        },
      ],
    });

    const studentAddressesRaw = await student.getStudentAddresses();
    const studentAddressesJson = studentAddressesRaw.map((sa) => sa.toJSON());
    console.log(studentAddressesJson);

    res.status(200).json(student);
  };

  add = async (req, res) => {
    const { firstName, lastName, mobile, gender } = req.body;

    const studentToAdd = {
      first_name: firstName,
      last_name: lastName,
      mobile,
      gender,
    };

    const newStudent = await this.db.students.create(studentToAdd);
    res.status(200).json(newStudent);
  };

  edit = async (req, res) => {
    const newValues = req.body;
    const { id } = req.params;

    const [rowsUpdatedCount] = await this.db.students.update(
      { ...newValues },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json({ updated: rowsUpdatedCount });
  };

  delete = async (req, res) => {
    const { id } = req.params;
    const { ids } = req.body; // <- we can perform a bulk delete by passing in an array in the req.body. example { "ids": [6,8,9] }

    const deleted = await this.db.students.destroy({ where: { id: ids } });
    res.status(200).json({ deleted });
  };
}

module.exports = StudentController;
