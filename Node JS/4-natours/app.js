const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello From The Server Side', app: 'Natours' });
});

app.post('/', (req, res) => [res.send('You can post to this endpoint... ')]);

const port = 2900;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
