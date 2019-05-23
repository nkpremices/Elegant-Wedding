

module.exports = (sequelize, DataTypes) => {
    const packages = sequelize.define('packages', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        numberOfPost: DataTypes.INTEGER,
        period: DataTypes.STRING,
    }, {});
    packages.associate = function (models) {
    // associations can be defined here
    };
    return packages;
};
