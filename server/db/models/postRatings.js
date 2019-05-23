

module.exports = (sequelize, DataTypes) => {
    const postRatings = sequelize.define('postRatings', {
        id: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        bookedDate: DataTypes.DATE,
    }, {});
    postRatings.associate = function (models) {
        postRatings.belongsTo(models.users);
        postRatings.belongsTo(models.posts);
    };
    return postRatings;
};
