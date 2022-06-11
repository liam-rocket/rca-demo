import axios from 'axios';
import './styles.scss';

// Make a request for all the items
axios
  .get('/getItems')
  .then((response) => {
    // handle success
    console.log(response.data);

    console.log('helllllllloooooo');

    const itemCont = document.createElement('div');

    response.data.forEach((item) => {
      const itemEl = document.createElement('div');
      itemEl.innerText = JSON.stringify(item);
      itemEl.classList.add('item');
      document.body.appendChild(itemEl);
    });

    document.body.appendChild(itemCont);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
