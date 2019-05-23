/* eslint-disable func-names */

const postRatings = (sequelize, DataTypes) => {
    const PostRatings = sequelize.define('postRatings', {
        bookedDate: DataTypes.DATE,
    });
    PostRatings.associate = function (models) {
        PostRatings.belongsTo(models.Users);
        PostRatings.belongsTo(models.Posts);
    };
    return PostRatings;
};

export default postRatings;
