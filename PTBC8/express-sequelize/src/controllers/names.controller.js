class NamesController {
  constructor(db) {
    this.db = db;
  }

  // list all the students in the database
  list = async (req, res) => {
    const data = await this.db.names.findAll();
    res.status(200).json(data);
  };

  add = async (req, res) => {
    const { name } = req.body;

    const dataToAdd = {
      name,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const newData = await this.db.names.create(dataToAdd);
    res.status(200).json(newData);
  };

  delete = async (req, res) => {
    const { id } = req.params;
    const { ids } = req.body; // <- we can perform a bulk delete by passing in an array in the req.body. example { "ids": [6,8,9] }

    const deleted = await this.db.names.destroy({ where: { id } });
    res.status(200).json({ deleted });
  };
}

module.exports = NamesController;
