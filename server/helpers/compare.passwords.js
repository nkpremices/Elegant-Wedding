import bcrypt from 'bcrypt';

/**
 * A fucnction to compare if two passwords match.
 * One of them is hashed
 *
 * @param {Object} tempUser - The user whose password
 * will be checked
 * @param {string} password - The provided password from
 * the client
 * @returns {Promise}
 */
const comparePasswords = (tempUser,
    password) => new Promise((resolve, reject) => {
    try {
        bcrypt.compare(password, tempUser.password).then((match) => {
            if (match) resolve(true);
            else resolve(false);
        });
    } catch (error) {
        reject(error);
    }
});

export default comparePasswords;
