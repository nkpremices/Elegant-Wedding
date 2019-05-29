

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn(
        'posts', // name of Source model
        'servicesId', // name of the key we're adding
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'services', // name of Target model
                key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
    ),

    down: (queryInterface, Sequelize) => queryInterface.removeColumn(
        'posts', // name of Source model
        'servicesId', // key we want to remove
    ),
};
