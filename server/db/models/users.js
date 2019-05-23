

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        id: DataTypes.INTEGER,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        type: DataTypes.STRING,
        phone: DataTypes.STRING,
    }, {});
    users.associate = function (models) {
    };
    return users;
};
