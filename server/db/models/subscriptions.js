

module.exports = (sequelize, DataTypes) => {
    const subscriptions = sequelize.define('subscriptions', {
        id: DataTypes.INTEGER,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
    }, {});
    subscriptions.associate = function (models) {
        subscriptions.belongsTo(models.users);
        subscriptions.belongsTo(models.paymentInfo);
        subscriptions.belongsTo(models.packages);
    };
    return subscriptions;
};
