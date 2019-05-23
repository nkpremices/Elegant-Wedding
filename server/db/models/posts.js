/* eslint-disable func-names */
const posts = (sequelize, DataTypes) => {
    const Posts = sequelize.define('posts', {
        header: DataTypes.STRING,
        description: DataTypes.STRING,
        location: DataTypes.STRING,
        pic1: DataTypes.STRING,
        pic2: DataTypes.STRING,
        pic3: DataTypes.STRING,
        pic4: DataTypes.STRING,
        pic5: DataTypes.STRING,
        pic6: DataTypes.STRING,
        pic7: DataTypes.STRING,
        pic8: DataTypes.STRING,
        pic9: DataTypes.STRING,
        pic10: DataTypes.STRING,
        views: DataTypes.INTEGER,
    });

    Posts.associate = (models) => {
        Posts.belongsTo(models.Users);
        Posts.belongsTo(models.Packages);
        Posts.belongsTo(models.Services);
    };

    return Posts;
};

export default posts;
