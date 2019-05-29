const users = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: DataTypes.STRING,
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
