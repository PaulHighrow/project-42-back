const express = require('express');
const logger = require('morgan');
const cors = require('cors');
// const cookieParser = require('cookie-parser');

const authRouter = require('./routes/api/auth');
const userRouter = require('./routes/api/user');
const noticesRouter = require('./routes/api/notices');
const petsRouter = require('./routes/api/pets');
const newsRouter = require('./routes/api/news');
const friendsRouter = require('./routes/api/friends');

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
// app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/notices', noticesRouter);
app.use('/pets', petsRouter);
app.use('/news', newsRouter);
app.use('/friends', friendsRouter);

app.use((__, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, __, res, ___) => {
  const { status = 500, message = 'Server error' } = err;
  console.log(err);
  res.status(status).json({ message });
});

module.exports = app;
