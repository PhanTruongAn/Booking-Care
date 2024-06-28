"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "123",
        firstName: "Phan",
        lastName: "An",
        address: "F1/15 Ho Chi Minh",
        phoneNumber: "0123456789",
        gender: 1,
        image: "link image",
        roleId: "R1",
        positionId: "P4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
