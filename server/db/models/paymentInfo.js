/* eslint-disable func-names */

const paymentInfos = (sequelize, DataTypes) => {
    const PaymentInfos = sequelize.define('paymentInfos', {
        fullName: DataTypes.STRING,
        expirationDate: DataTypes.DATE,
        cvc: DataTypes.INTEGER,
        accountNumber: DataTypes.STRING,
    });
    PaymentInfos.associate = function (models) {
        PaymentInfos.belongsTo(models.Users);
    };
    return PaymentInfos;
};

export default paymentInfos;
