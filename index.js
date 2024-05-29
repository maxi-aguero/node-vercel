const express = require('express')
const app = express();
app.listen(process.env.PORT||4000);
console.log(`Servidor app escuchando en puerto${port}`);