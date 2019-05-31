/* eslint-disable no-unused-vars */
import models, { sequelize } from '../../db/models';
import sendError from '../../helpers/send.error';

export default {
    imputPaymentInfo: async (req, res) => {
        // Initialising variables
        const result = {};
        const status = 201;
        let tempPayment;

        // getting the body content
        const {
            fullName,
            expirationDate,
            cvc,
            accountNumber,
        } = req.body;

        try {
            tempPayment = await models.PaymentInfo.create({
                fullName,
                expirationDate,
                cvc,
                accountNumber,
                userId: req.user.id,
            });

            // Sending the result
            result.status = status;
            result.message = 'Payment info registered successfully';

            result.data = tempPayment.dataValues;
            res.status(status).json(result);
        } catch (error) {
            sendError(400, result, res, error);
        }
    },
};
