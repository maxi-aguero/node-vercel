const express = require('express')
const app = express();
const port = 4000;

app.listen(process.env.PORT||4000);
console.log(`Servidor app escuchando en puerto${port}`);