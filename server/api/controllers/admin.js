import models, { sequelize } from '../../db/models';


const services = {
    async createService(req, res) {
        const { name } = req.body;
        const { type } = req.user;
        if (type === 'admin') {
            await models.Services.create(
                {
                    name,
                },

            );
            return res.status(201).json({
                message: `${name} has been added to the services list!`,
            });
        }
        return res.status(403).json({
            message: 'You do not have the right to create a service!',
        });
    },

};

export default services;
