

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('posts', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        header: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        location: {
            type: Sequelize.STRING,
        },
        pic1: {
            type: Sequelize.STRING,
        },
        pic2: {
            type: Sequelize.STRING,
        },
        pic3: {
            type: Sequelize.STRING,
        },
        pic4: {
            type: Sequelize.STRING,
        },
        pic5: {
            type: Sequelize.STRING,
        },
        pic6: {
            type: Sequelize.STRING,
        },
        pic7: {
            type: Sequelize.STRING,
        },
        pic8: {
            type: Sequelize.STRING,
        },
        pic9: {
            type: Sequelize.STRING,
        },
        pic10: {
            type: Sequelize.STRING,
        },
        owner: {
            type: Sequelize.INTEGER,
        },
        service_id: {
            type: Sequelize.INTEGER,
        },
        created_at: {
            type: Sequelize.DATE,
        },
        views: {
            type: Sequelize.INTEGER,
        },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('posts'),
};
