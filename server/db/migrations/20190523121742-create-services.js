

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('services', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
        },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('services'),
};
