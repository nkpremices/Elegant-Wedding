

module.exports = (sequelize, DataTypes) => {
    const paymentInfo = sequelize.define('paymentInfo', {
        id: DataTypes.INTEGER,
        fullName: DataTypes.STRING,
        expirationDate: DataTypes.STRING,
        cvc: DataTypes.INTEGER,
    }, {});
    paymentInfo.associate = function (models) {
        paymentInfo.belongsTo(models.users);
    };
    return paymentInfo;
};
