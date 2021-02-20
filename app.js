const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;






//Levantamos servidor
// npm start , npm run dev
app.listen(port, () => {
    console.log(`Server listening at https://localhost:${port}`);
});