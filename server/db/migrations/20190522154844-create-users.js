

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        firstName: {
            type: Sequelize.STRING,
        },
        lastName: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        username: {
            type: Sequelize.STRING,
        },
        type: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.STRING,
        },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
