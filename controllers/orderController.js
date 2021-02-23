const mongoose = require('mongoose');
const Order = require("../models/order");

class OderController {

};




/*

- Alquilar película



*/

/*

const rentalSchema = {
    ownerId: {
        type: ObjectId,
        required: true
    }, 
    dateIni: Date, 
    dateEnd: Date,
    movieReference: {
        type: ObjectId, 
        required: true
    }
};

IN CONTROLLER
Movie.find().limit(10).then(movies) => {
    return movie.map (async (mmovie) => {
        movie.owner = await User.findById(movie.owner);
    })
    return Movie.find.limit(10);
};

Esto es un modo de controlar la relación pedido-cliente. 
Aunque podríamos prescindir de él simplemente con el modelo rental

*/

/*

router.user('/:id/cars') -- le digo que use el router de car.
Recurso car del usuario ID.
Así, me llevan a los cars de un usuario simpleente escribiendo esto al final del routes de car. Así, de manera anidada, podríamos acceder por URL mediante Postman.
*/




//module.exports = OrderController;