

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface
        .createTable('subscriptions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            startDate: {
                type: Sequelize.DATE,
            },
            endDate: {
                type: Sequelize.DATE,
            },
        }),
    down: (queryInterface, Sequelize) => queryInterface
        .dropTable('subscriptions'),
};
