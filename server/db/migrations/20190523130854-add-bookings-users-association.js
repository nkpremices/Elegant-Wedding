module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn(
        'bookings', // name of Source model
        'userId', // name of the key we're adding
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'users', // name of Target model
                key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
    ),

    down: (queryInterface, Sequelize) => queryInterface.removeColumn(
        'bookings', // name of Source model
        'userId', // key we want to remove
    ),
};
