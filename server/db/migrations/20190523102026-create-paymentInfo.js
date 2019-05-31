

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface
        .createTable('paymentInfo', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fullName: {
                type: Sequelize.STRING,
            },
            expirationDate: {
                type: Sequelize.STRING,
            },
            cvc: {
                type: Sequelize.INTEGER,
            },
        }),
    down: (queryInterface, Sequelize) => queryInterface
        .dropTable('paymentInfo'),
};
