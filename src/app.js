const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan'); // Logs
const { sequelize } = require('./models');
const { port } = require('./config/config');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

sequelize.sync();
app.listen(port || 3001);
console.log(`Server started on ${port}`);
