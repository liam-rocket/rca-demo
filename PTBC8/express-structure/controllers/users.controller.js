class UsersController {
  constructor() {
    this.users = ['Liam', 'Kai', 'Sam', 'Foong'];
  }

  getUsers = (req, res) => {
    const { name } = req.query;

    let resp = this.users;
    if (name) {
      resp = this.users.filter((user) => user.includes(name));
    }

    res.status(200).json({ success: true, data: resp });
  };

  createUser = (req, res) => {
    const userToAdd = req.body.user;
    this.users.push(userToAdd);
    res.send({ success: true, data: this.users });
  };

  getUser = (req, res) => {
    const { userId } = req.params;
    const user = this.users[userId];
    res.status(200).json({ success: true, data: user });
  };

  updateUser = (req, res) => {
    const userToAdd = req.body.user;
    const userToReplace = req.params.name;

    const index = this.users.indexOf(userToReplace);
    if (index === -1) {
      res.send({
        success: false,
        message: 'No user with that name',
        data: this.users,
      });
    } else {
      this.users.splice(index, 1, userToAdd);
      res.send({ success: true, data: this.users });
    }
  };

  deleteUser = async (req, res) => {
    const { userId } = req.params;
    const resp = this.users.splice(userId, 1);
    res.send({ success: true, data: resp });
  };
}

export default UsersController;
