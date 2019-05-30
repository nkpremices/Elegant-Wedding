

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('comments', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        message: {
            type: Sequelize.STRING,
        },
        createdAt: {
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('comments'),
};
