const users = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        type: DataTypes.STRING,
        phone: DataTypes.STRING,
    });

    Users.findByLogin = async (login) => {
        let user = await Users.findOne({
            where: { username: login },
        });
        if (!user) {
            user = await Users.findOne({
                where: { email: login },
            });
        }
        return user;
    };
    return Users;
};

export default users;
