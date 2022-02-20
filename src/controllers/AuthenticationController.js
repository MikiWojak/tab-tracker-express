const { User } = require('../models');

module.exports = {
    async register(req, res) {
        const { body } = req;

        try {
            const { id } = await User.create(body);

            const user = await User.findOne({
                where: { id }
            });

            res.send(user.toJSON());
        } catch (error) {
            res.status(400).send({
                error: 'This email account is already in use.'
            });
        }
    }
};
