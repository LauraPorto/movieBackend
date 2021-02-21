const logger = (log) => { console.log(new Date, log) };

const mongoose = require("mongoose");

const MONGO_HOST = process.env.MONGO_HOST || "localhost";
const MONGO_PORT = process.env.MONGO_PORT || "27017";
const MONGO_DBNAME = process.env.MONGO_BDBNAME || "filmDb";

const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;

const QUERY_STRING = MONGO_USER ?
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}` :
    `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`;

const filmDb = mongoose.connect(QUERY_STRING, { userNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        logger("Conexión establecida")
    }).catch(error => {
        console.log(error.masage)
    });


module.exports = filmDb;