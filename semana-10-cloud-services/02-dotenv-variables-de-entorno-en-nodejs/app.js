const express = require('express');
const app = express();

require ('dotenv').config({path: './.env'});

const puerto = process.env.PORT || 4000;

app.listen(puerto, () => {
    console.log('SERVER RUNNING IN PORT: '+ puerto);
});


