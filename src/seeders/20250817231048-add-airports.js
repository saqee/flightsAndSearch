"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "osmania International Airport",
          cityId: 2,
          createdat: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hazrat Shah Jahan International Airport",
          cityId: 1,
          createdat: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hazrat Shahjala  International Airport",
          cityId: 3,
          createdat: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "eksho International Airport",
          cityId: 1,
          createdat: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
