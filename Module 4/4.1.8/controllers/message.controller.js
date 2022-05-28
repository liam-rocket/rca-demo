/* eslint-disable import/extensions */

import sequelizePackage from 'sequelize';

const { Op } = sequelizePackage;

class MessageController {
  constructor(db) {
    this.db = db;
  }

  sendMessage = async (request, response, next) => {
    try {
      const { receiverName, senderName, messageContent } = request.body;

      const users = await this.db.User.findAll({
        where: {
          [Op.or]: [{ name: receiverName }, { name: senderName }],
        },
      });

      // separate out the instances into sender and receiver
      const senderUser = users.find((user) => user.name === senderName);
      const receiverUser = users.find((user) => user.name === receiverName);

      // console.log('sender');
      // console.log(senderUser);
      // console.log('recpient');
      // console.log(receiverUser);

      // eslint-disable-next-line prefer-destructuring
      const transaction = await this.db.sequelize.transaction();

      // start of operation
      const newUser = await this.db.User.create(
        {
          name: 'liam',
        },
        { transaction }
      );

      console.log(newUser.toJSON());

      const messageOne = await this.db.Message.create(
        {
          receiverId: receiverUser.id,
          senderId: senderUser.id,
          message: 'messageOne',
        },
        { transaction }
      );

      console.log('messageOne done');

      const messageTwo = await this.db.Message.create(
        {
          receiverId: receiverUser.id,
          senderId: newUser.id,
          message: 'messageTwo',
        },
        { transaction }
      );

      console.log('messageTwo done');

      const messageThree = await this.db.Message.create(
        {
          receiverId: receiverUser.id,
          senderId: newUser.id,
          message: 'messageThree',
        },
        { transaction }
      );

      console.log(messageThree);

      const messageFour = await this.db.Message.create(
        {
          receiverId: receiverUser.id,
          senderId: senderUser.id,
          message: messageThree.message,
        },
        { transaction }
      );

      console.log(messageFour);

      await transaction.commit();

      console.log(transaction);

      // f8d730e1-bf1f-45f4-a28d-eeae78b2eef8
      // b601ecbb-ecd0-41f3-a014-33943ab34f99

      // start of operation

      response.json('');
    } catch (error) {
      next(error);
    }
  };

  receiveMessage = async (request, response, next) => {
    try {
      const { userName } = request.body;
      const user = await this.db.User.findOne({
        where: {
          name: userName, // <-- kai has user id 1
        },
        include: {
          as: 'sentMessages', // say which group of messages we are getting
          model: this.db.Message,
          include: {
            as: 'receiver', // get the receiver of the message
            model: this.db.User,
          },
        },
      });

      console.log(`${user.name}'s outbox`);
      // print out each message
      user.sentMessages.forEach((msg) => {
        // without the nested include above, we can
        // get the recipient (name) like this:
        // const sender = await msg.getSender();
        // console.log(JSON.stringify(msg));
        console.log(`to: ${msg.receiver.name}`);
        console.log(msg.message);
        console.log('-----');
      });
      response.send(user.sentMessages);
    } catch (error) {
      next(error);
    }
  };

  inbox = async (request, response, next) => {
    try {
      const { userName } = request.body;
      const user = await this.db.User.findOne({
        where: {
          name: userName,
        },
        include: {
          as: 'receivedMessages', // say which group of messages we are getting
          model: this.db.Message,
          include: {
            as: 'sender', // get the sender of the message
            model: this.db.User,
          },
        },
      });

      console.log(`${user.name}'s outbox`);
      // print out each message
      user.receivedMessages.forEach(async (msg) => {
        // without the nested include above we can get the
        // sender (name) like this:
        // const sender = await msg.getSender();
        // console.log(JSON.stringify(msg));
        console.log(`from: ${msg.sender.name}`);
        console.log(msg.message);
        console.log('-----');
      });
      response.send(user.receivedMessages);
    } catch (error) {
      next(error);
    }
  };
}

export default MessageController;
