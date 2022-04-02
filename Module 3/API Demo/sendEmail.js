/* eslint-disable comma-dangle */
import path from 'path';
import dotenv from 'dotenv';

import sgMail from '@sendgrid/mail';

// const sgMail = require('@sendgrid/mail');

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const sendgridApiKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridApiKey);

const msg = {
  to: 'andrewlim.hj@gmail.com',
  from: 'hello@binery.co', // Use the email address or domain you verified above
  subject: 'Hello Regina this is Liam',
  text: 'Hello Regina, this is Liam again. I Love Rocket Academy',
  html: '<strong>Hello Regina, this is Liam again. I Love Rocket Academy</strong>',
};

// ES6
sgMail.send(msg).then(
  (response) => {
    console.log(response);
  },
  (error) => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
);
