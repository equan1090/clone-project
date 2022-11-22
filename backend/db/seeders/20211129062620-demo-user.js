'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        image: 'https://tune-cloud-audio.s3.us-west-1.amazonaws.com/default-profile.png'
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://tune-cloud-audio.s3.us-west-1.amazonaws.com/default-profile.png'

      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://tune-cloud-audio.s3.us-west-1.amazonaws.com/default-profile.png'

      },
      {
        email: faker.internet.email(),
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://tune-cloud-audio.s3.us-west-1.amazonaws.com/default-profile.png'

      },
      {
        email: faker.internet.email(),
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://tune-cloud-audio.s3.us-west-1.amazonaws.com/default-profile.png'

      },
      {
        email: faker.internet.email(),
        username: 'FakeUser5',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://tune-cloud-audio.s3.us-west-1.amazonaws.com/default-profile.png'

      },
      {
        email: faker.internet.email(),
        username: 'FakeUser6',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://tune-cloud-audio.s3.us-west-1.amazonaws.com/default-profile.png'

      },
      {
        email: faker.internet.email(),
        username: 'FakeUser7',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://tune-cloud-audio.s3.us-west-1.amazonaws.com/default-profile.png'
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser8',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://tune-cloud-audio.s3.us-west-1.amazonaws.com/default-profile.png'
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser9',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://tune-cloud-audio.s3.us-west-1.amazonaws.com/default-profile.png'
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser10',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://tune-cloud-audio.s3.us-west-1.amazonaws.com/default-profile.png'
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser11',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://tune-cloud-audio.s3.us-west-1.amazonaws.com/default-profile.png'
      },


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options);
  }
};
