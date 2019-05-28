import bcrypt from 'bcrypt';
import environment from '../configs/environments';


/**
 * A function to hash a password given as parameter
 *
 * @param {String} password - The password to hash
 */
const createHash = password => new Promise((resolve, reject) => {
    bcrypt.hash(password, parseInt(environment.saltingRounds, 10),
        (err, hash) => {
            if (err) return reject(err);
            resolve(hash);
            return hash;
        });
});

export default createHash;
