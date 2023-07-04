const audience = {
  audience: ['liam', 'lester', 'jie ren'],
};

const game = {
  name: 'poker game',
  players: ['Vanessa', 'Kai'],
  winner: null,
  ...audience,
};

console.log(game);

// * game happens.....

game.winner = 'Kai';

console.log(game);
