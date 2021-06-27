const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan'); // Logs

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    const {
        body: { email }
    } = req;

    res.send({
        message: `Hello ${email}! Your user was registered! Have fun!`
    });
});

app.listen(process.env.PORT || 3001);
