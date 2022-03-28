import axios from "axios";
import { response } from "express";

axios
  .get(`https://restcountries.com/v3.1/name/singapore?fullText=true`) // first request to get the details of Singapore
  .then((countryResponse) => {
    const countryCode = countryResponse.data[0].cca2; // SG
    return axios.get(
      `https://restcountries.com/v3.1/alpha?codes=${countryCode}` // uses the data returned in the first request to make a second request
    );
  })
  .then((countryResponse) => {
    const countryCode = countryResponse.data[0].cca2; // SG
    return axios.get(
      `https://restcountries.com/v3.1/alpha?codes=${countryCode}` // uses the data returned in the first request to make a second request
    );
  })
  .then((codeResponse) => {
    const currency = codeResponse.data[0].currencies; // console logging the data returned from the second request
    console.log("currency: ", currency);
  })
  .catch((err) => {
    console.log(err);
  });

// ----- try catch -----
// ? not recommended at this stage cuz need to do await (week 24 day 44)

// try {
//   const country = await axios.get(
//     `https://restcountries.com/v3.1/name/singapore?fullText=true`
//   );

//   const countryCode = countryResponse.data[0].cca2; // SG
//   const codeResponse = await axios.get(
//     `https://restcountries.com/v3.1/alpha?codes=${countryCode}`
//   );

//   const currency = codeResponse.data[0].currencies;
// } catch (err) {
//   console.log(err);
// }
