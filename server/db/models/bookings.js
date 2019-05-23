

module.exports = (sequelize, DataTypes) => {
    const bookings = sequelize.define('bookings', {
        id: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        bookedDate: DataTypes.DATE,
    }, {});
    bookings.associate = function (models) {
        bookings.belongsTo(models.users);
        bookings.belongsTo(models.posts);
    };
    return bookings;
};
