/**
 * Validation Schemas description file
 * @name validationSchemas
 */

import Joi from 'joi';

const string = Joi.string();
const email = string.email()
    .regex(/^[a-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/)
    .required();

const password = string
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/)
    .min(5)
    .required();

const name = string
    .regex(/^[A-Za-z]+$/)
    .min(3)
    .max(30)
    .required();

const number = Joi
    .number()
    .integer()
    .positive()
    .required();

/**
 * An object to define all the validation schemas
 * @property {object}  createUserAccount - The object  to
 * describe the validation for the signup endpoint
 * @property {object}  signin - The object  to describe the
 * validation for the signin endpoint.
 */
export default {
    signup: Joi.object().keys({
        firstName: name,
        lastName: name,
        email,
        password,

        type: string
            .lowercase()
            .valid('customer', 'provider')
            .required(),

        phone: string
            .min(3)
            .max(15)
            .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
            .required(),
    }),
    signin: Joi.object().keys({
        email,
        password,
    }),
    createPackage: Joi.object().keys({
        name,
        numberOfPosts: number,

        period: string
            .alphanum()
            .regex(/[1-9]*[mMyY]/)
            .required(),

        price: number,
    }),

    payment: Joi.object().keys({
        fullName: string
            .required(),

        expirationDate: Joi
            .date()
            .required(),

        cvc: number,
        accountNumber: number,
    }),
};
