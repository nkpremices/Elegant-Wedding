module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn(
        'subscriptions', // name of Source model
        'packageId', // name of the key we're adding
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'packages', // name of Target model
                key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
    ),

    down: (queryInterface, Sequelize) => queryInterface.removeColumn(
        'subscriptions', // name of Source model
        'packageId', // key we want to remove
    ),
};
