module.exports = app => {
    app.post('/register', (req, res) => {
        const {
            body: { email }
        } = req;

        res.send({
            message: `Hello ${email}! Your user was registered! Have fun!`
        });
    });
};
