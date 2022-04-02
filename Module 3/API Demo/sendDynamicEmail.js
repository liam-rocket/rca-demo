/* eslint-disable comma-dangle */
import path from 'path';
import dotenv from 'dotenv';

import sgMail from '@sendgrid/mail';

// const sgMail = require('@sendgrid/mail');

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const sendgridApiKey = process.env.SENDGRID_API_KEY;
const sendgridTemplateId = process.env.EMAIL_VERIFICATION_TEMPLATE_ID;

sgMail.setApiKey(sendgridApiKey);

const msg = {
  to: 'andrewlim.hj@gmail.com',
  from: 'hello@binery.co', // Use the email address or domain you verified above
  templateId: sendgridTemplateId,
  dynamicTemplateData: {
    name: 'Andrew',
    link: 'https://google.com',
  },
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
