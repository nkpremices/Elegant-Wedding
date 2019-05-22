

module.exports = (sequelize, DataTypes) => {
    const posts = sequelize.define('posts', {
        id: DataTypes.INTEGER,
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
        owner: DataTypes.INTEGER,
        service_id: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        views: DataTypes.INTEGER,
    }, {});
    posts.associate = function (models) {
    // associations can be defined here
    };
    return posts;
};
