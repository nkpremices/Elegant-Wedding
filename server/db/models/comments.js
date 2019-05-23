

module.exports = (sequelize, DataTypes) => {
    const comments = sequelize.define('comments', {
        id: DataTypes.INTEGER,
        message: DataTypes.STRING,
        createdAt: DataTypes.DATE,
    }, {});
    comments.associate = function (models) {
        comments.belongsTo(models.users);
        comments.belongsTo(models.posts);
    };
    return comments;
};
