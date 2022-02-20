module.exports = {
    port: process.env.PORT || 3000,

    db: {
        database: process.env.DATABASE_NAME || 'tabtracker',
        user: process.env.DATABASE_USERNAME || 'tabtracker',
        password: process.env.DATABASE_PASSWORD || 'tabtracker',
        options: {
            dialect: process.env.DATABASE_DIALECT || 'mysql',
            host: process.env.DATABASE_HOST || '127.0.0.1'
        }
    }
};
