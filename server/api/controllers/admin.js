/* eslint-disable no-unused-vars */
import models, { sequelize } from '../../db/models';
import sendError from '../../helpers/send.error';

const services = {
    createService: async (req, res) => {
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
    createPackage: async (req, res) => {
        // Initialising variables
        const result = {};
        const status = 201;
        let tempPackage;

        try {
            tempPackage = await models.Packages.create(req.body);
            // Sending the result
            result.status = status;
            result.message = 'Package registered successfully';

            result.data = tempPackage.dataValues;

            res.status(status).json(result);
        } catch (error) {
            sendError(205, result, res, error);
        }
    },

};

export default services;
