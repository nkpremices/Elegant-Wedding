/* eslint-disable func-names */

const subscriptions = (sequelize, DataTypes) => {
    const Subscriptions = sequelize.define('subscriptions', {
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
    });
    Subscriptions.associate = (models) => {
        Subscriptions.belongsTo(models.Users);
        Subscriptions.belongsTo(models.PaymentInfo);
        Subscriptions.belongsTo(models.Packages);
    };
    return subscriptions;
};

export default subscriptions;
