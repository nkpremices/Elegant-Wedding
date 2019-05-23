/* eslint-disable import/no-mutable-exports */
/**
 * Create and export environment variables
 * @name environments
 */

import dotenv from 'dotenv';

let environment;

dotenv.config();

// Initializing env variables
const appPort = process.env.PORT;
const saltingRounds = process.env.SALTING_ROUNDS;
const jwtKey = process.env.JWT_KEY;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const devDbName = process.env.DEV_DB_NAME;
const testDbName = process.env.TEST_DB_NAME;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;
const envName = process.env.NODE_ENV;

/**
 * An object to contain all the needed environements
 * @property {object} test - The test env object
 * @property {object} development - The development env object
 * @property {object} staging - The staging env object
 */
const environments = {
    test: {
        name: 'test',
        app: {
            port: appPort,
        },
        database: {
            user: dbUser,
            host: dbHost,
            name: testDbName,
            password: dbPassword,
            port: dbPort,
        },
        saltingRounds,
        jwtKey,
    },

    development: {
        name: 'development',
        app: {
            port: appPort,
        },
        database: {
            user: dbUser,
            host: dbHost,
            name: devDbName,
            password: dbPassword,
            port: dbPort,
        },
        saltingRounds,
        jwtKey,
    },

    staging: {
        name: 'staging',
        app: {
            port: appPort,
        },
        database: {
            user: dbUser,
            host: dbHost,
            name: testDbName,
            password: dbPassword,
            port: dbPort,
        },
        saltingRounds,
        jwtKey,
    },
};

// Determine which environment we are in
const currentEnvironment = envName.toLowerCase() || '';

/* Check that the current environment is one the envs
   defined above, if not default to dev
*/
if (environments[currentEnvironment]) {
    environment = environments[currentEnvironment];
} else environment = environments.development;

// Export the environnement
export default environment;
