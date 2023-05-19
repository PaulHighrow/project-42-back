const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const authRouter = require('./routes/api/auth');
const usersRouter = require('./routes/api/users');
const noticesRouter = require('./routes/api/notices');
const petsRouter = require('./routes/api/pets');

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/notices', noticesRouter);
app.use('/api/pets', petsRouter);

app.use((__, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, __, res, ___) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
