const express = require('express');

const app = express();
const path = require('path');
const routes = require('./routes');

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
