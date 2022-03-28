const PORT = 3000;
const express = require('express');
const path = require('path');
const apiRoute = require('./routes/api');


const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoute);


app.listen(PORT, ()=>{
  console.log(`Server started on port ${PORT}!`);
});

