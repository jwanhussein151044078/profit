const express = require('express');
const {sequelize} = require('./models');
const cors = require('cors');
const corsOptions = require('../config/corsOptions');
const credentials = require('./middleware/credentials');
const errorHandler = require('./middleware/errorHandler.js');
const models = require('./models/index.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json({limit: '200mb'}));



app.use(errorHandler);

sequelize.authenticate()
.then(()=>{
    app.listen(port, () => {
        app.set('db',models);
        console.log(`Example app listening on port ${port}`)
        console.log('DataBase Connection Established')
    })
}).catch((err)=>{
    console.log('DataBase Connection Error ',err);
})