function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const makeRequest = async () => {
  // Make a request for all the items
  axios
    .get('/ajax')
    .then((response) => {
      // handle success

      const title = document.getElementById('title');
      title.innerText = 'I have made a request';

      const resp = document.getElementById('response');
      resp.innerText = `The response: ${response.data}`;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
