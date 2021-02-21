const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

//RUTAS
//Importación de las rutas
let filmRouter = require("./routers/filmRouter");
let userRouter = require("./routers/userRouter");
let orderRouter = require("./routers/orderRouter");

//Endpoints
app.use("/film", filmRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);


//Levantamos servidor
// npm start , npm run dev
app.listen(port, () => {
    console.log(`Server listening at https://localhost:${port}`);
});