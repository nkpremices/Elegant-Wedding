/* eslint-disable no-unused-vars */
import models, { sequelize } from '../models';
import generateHash from '../../helpers/generate.hash';

const createAdmin = async () => {
    const hashedPass = await generateHash('Admin123!');
    const adminEmail = 'admin@gmail.com';
    let tempAdmin;

    try {
        tempAdmin = await models.Users.findAll({
            where: {
                email: adminEmail,
            },
        });

        if (tempAdmin.length === 0) {
            tempAdmin = await models.Users.create({
                firstName: 'Admin',
                lastName: 'Admin',
                email: 'admin@gmail.com',
                password: hashedPass,
                type: 'admin',
                phone: '09999999999',
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export default createAdmin();
