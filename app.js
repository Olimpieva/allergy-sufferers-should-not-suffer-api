const express = require('express');
const cookieParser = require('cookie-parser');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Yay! App listening on port ${PORT}`);
});
