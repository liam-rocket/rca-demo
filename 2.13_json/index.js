import { write, read, add } from './jsonFileStorage.js';
// WRITE
// Get some data from our app
const myData = { name: 'kai' };
// Save that data to our JSON DB
write('data.json', myData);

// READ
read('data.json');

// ADD
// Execute the add function to add a new key-value pair to data.json.
add('data.json', 'name', 'kai');