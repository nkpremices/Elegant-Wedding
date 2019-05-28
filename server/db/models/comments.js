/* eslint-disable func-names */

const comments = (sequelize, DataTypes) => {
    const Comments = sequelize.define('comments', {
        message: DataTypes.STRING,
    });

    Comments.associate = function (models) {
        Comments.belongsTo(models.Users);
        Comments.belongsTo(models.Posts);
    };

    return Comments;
};

export default comments;
