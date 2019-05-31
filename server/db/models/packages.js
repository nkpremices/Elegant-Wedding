/* eslint-disable func-names */

const packages = (sequelize, DataTypes) => {
    const Packages = sequelize.define('packages', {
        name: DataTypes.STRING,
        numberOfPosts: DataTypes.INTEGER,
        period: DataTypes.STRING,
        price: DataTypes.FLOAT,

    });

    return Packages;
};

export default packages;
