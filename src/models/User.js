const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        'User',
        {
            email: {
                type: DataTypes.STRING,
                unique: true
            },
            password: {
                type: DataTypes.STRING
            }
        },
        {
            defaultScope: {
                attributes: { exclude: ['password'] }
            },

            hooks: {
                async beforeSave(user, options) {
                    if (options.fields && options.fields.includes('password')) {
                        user.password = await bcrypt.hash(user.password, 10);
                    }
                }
            }
        }
    );
