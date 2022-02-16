const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { PORT, DB_URL } = require('./utils/config');

const routes = require('./routes');

const app = express();

mongoose.connect(DB_URL);

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Yay! App listening on port ${PORT}`);
});
