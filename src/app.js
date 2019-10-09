/** Server */
const express = require('express');
const logger = require('morgan');

/** Middleware */
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./middleware/swaggerSpec');
const passport = require("./middleware/passport");

/** Database */
require('./database/database')

/** Routers */
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/auth', authRouter);
app.use('/users', usersRouter);

module.exports = app;
