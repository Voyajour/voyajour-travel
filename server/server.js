const express = require('express');
const SignupRouter = require('./routes/signupRouter');

require('dotenv').config();

const path = require('path');
const itineraryRouter = require('./routes/itineraryRouter.js');
const apiRouter = require('./routes/api.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// serving our bundle.js from webpack
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

// serving our basic html file to the three routes listed in our React Router for App.jsx
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// note, this route and router don't really do much. itenerary router is;
app.use('/itinerary', itineraryRouter);

app.use('/api', apiRouter);

app.get('/main', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use('/signup', SignupRouter);

app.post('/signup', (req, res) => {
  console.log(req.body);
  res.status(200).send('post successful');
});

// error handler for unknown requests
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    massage: { err: 'An error occurred' },
  };
  const errObj = { ...defaultErr, err };
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => console.log('listeniiiiing'));
