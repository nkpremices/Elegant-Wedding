/* eslint-disable func-names */

const paymentInfos = (sequelize, DataTypes) => {
    const PaymentInfos = sequelize.define('paymentInfos', {
        fullName: DataTypes.STRING,
        expirationDate: DataTypes.STRING,
        cvc: DataTypes.INTEGER,
    });
    PaymentInfos.associate = function (models) {
        PaymentInfos.belongsTo(models.Users);
    };
    return PaymentInfos;
};

export default paymentInfos;
