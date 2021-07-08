const { User } = require('../models');

module.exports = {
    async register(req, res) {
        const { body } = req;

        try {
            const user = await User.create(body);

            res.send(user.toJSON());
        } catch (error) {
            res.status(400).send({
                error: 'This email account is already in use.'
            });
        }
    }
};
