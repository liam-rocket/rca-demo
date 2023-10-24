class FruitController {
  constructor() {
    this.fruitArray = ['Apple', 'Banana'];
  }

  list = (req, res) => {
    res.send({ fruit: this.fruitArray });
  };

  add = (req, res) => {
    const fruitToAdd = req.body.fruit;
    this.fruit.push(fruitToAdd);
    res.send({ fruit: this.fruitArray, message: 'success' });
  };

  edit = (req, res) => {
    const fruitToAdd = req.body.fruit;
    const fruitToReplace = req.params.name;

    const index = this.fruitArray.indexOf(fruitToReplace);
    if (index === -1) {
      res.send({ message: 'No fruit with that name', fruit: this.fruitArray });
    } else {
      this.fruitArray.splice(index, 1, fruitToAdd);
      res.send({ fruit: this.fruitArray, message: 'success' });
    }
  };

  delete = async (req, res) => {
    const fruitToReplace = req.params.name;
    const index = this.fruitArray.indexOf(fruitToReplace);
    this.fruitArray.splice(index, 1);
    res.send({ fruit: this.fruitArray, message: 'success' });
  };
}

export default FruitController;
