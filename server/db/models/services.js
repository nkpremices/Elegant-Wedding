/* eslint-disable func-names */

const services = (sequelize, DataTypes) => {
    const Services = sequelize.define('services', {
        name: DataTypes.STRING,
    });
    return Services;
};

export default services;
