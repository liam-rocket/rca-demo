import axios from 'axios';

interface Response {
  message: string;
  status: string;
}

const getAsyncRequest = async (): Promise<Response> => {
  const resp: Response = await axios.get(
    'http://dog.ceo/api/breeds/image/random'
  );
  console.log(resp);
  return resp;
};

getAsyncRequest();
