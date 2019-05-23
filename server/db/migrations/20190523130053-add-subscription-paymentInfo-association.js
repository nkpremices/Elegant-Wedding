

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn(
        'subscriptions', // name of Source model
        'paymentInfoId', // name of the key we're adding
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'paymentInfo', // name of Target model
                key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
    ),

    down: (queryInterface, Sequelize) => queryInterface.removeColumn(
        'subscriptions', // name of Source model
        'paymentInfoId', // key we want to remove
    ),
};
