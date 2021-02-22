const express = require("express");
const filmDb = require("./filmDb");

const app = express();
const port = process.env.PORT || 3000;
//const port = 3000;


app.use(express.json());


//RUTAS
//Importación de las rutas
let filmRouter = require("./routers/filmRouter");
let userRouter = require("./routers/userRouter");
let orderRouter = require("./routers/orderRouter");

app.use(filmRouter);
app.use(userRouter);
app.use(orderRouter);


//Levantamos servidor
// npm start , npm run dev
filmDb
    .then(() => {
        app.listen(port, () => {
            console.log(`Server listening at https://localhost:${port}`);
        })
    }).catch((error) => console.log(error.message));