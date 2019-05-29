

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('packages', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
        },
        numberOfPost: {
            type: Sequelize.INTEGER,
        },
        period: {
            type: Sequelize.STRING,
        },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('packages'),
};
