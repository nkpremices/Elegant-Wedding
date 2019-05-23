

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface
        .createTable('postRating', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            createdAt: {
                type: Sequelize.DATE,
            },
            bookedDate: {
                type: Sequelize.DATE,
            },
        }),
    down: (queryInterface, Sequelize) => queryInterface
        .dropTable('postRating'),
};
