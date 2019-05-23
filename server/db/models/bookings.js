/* eslint-disable func-names */

const bookings = (sequelize, DataTypes) => {
    const Bookings = sequelize.define('bookings', {
        bookedDate: DataTypes.DATE,
    });

    Bookings.associate = function (models) {
        Bookings.belongsTo(models.Users);
        Bookings.belongsTo(models.Posts);
    };

    return Bookings;
};

export default bookings;
