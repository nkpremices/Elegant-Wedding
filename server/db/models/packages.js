/* eslint-disable func-names */

const packages = (sequelize, DataTypes) => {
    const Packages = sequelize.define('packages', {
        name: DataTypes.STRING,
        numberOfPost: DataTypes.INTEGER,
        period: DataTypes.STRING,
    });

    return Packages;
};

export default packages;
