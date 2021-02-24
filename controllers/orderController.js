const mongoose = require('mongoose');
const Order = require("../models/order");


class OrderController {

    constructor() {

    };

    async rentFilm(order) {
        return Order.create(order);
    };

    async findOrderById(id) {
        return Order.findById(id);
    };

    async indexAllOrder() {
        return Order.find();
    };

    async updateOrder(id, order) {
        //return User.findByIdAndUpdate(id);
        const orderFound = Order.findOne({ _id: id });
        return orderFound.update(order);
    };

    async destroyOrder(id) {
        return Order.findByIdAndDelete(id);
    };
}



let orderController = new OrderController();
module.exports = orderController;




/*

- Alquilar película



*/

/*


const rentalSchema = {
    customerId: {
        type: ObjectId,
        required: true
    }, 
    dateIni: Date, 
    dateEnd: Date,
    price: Number,
    movieReference: {
        type: ObjectId, 
        required: true
    }
};

const Rental = Mongoose.model("Rental", rentalSchema);
module.exports = Rental;



############
IN CONTROLLER
Movie.find().limit(10).then(movies) => {
    return movie.map (async (mmovie) => {
        movie.owner = await User.findById(movie.owner);
    })
    return Movie.find.limit(10);
};

Esto es un modo de controlar la relación pedido-cliente. 
Aunque podríamos prescindir de él simplemente con el modelo rental

*******************+++++**********************
RENTAL CONTROLLER 
copidado de user controller añadiendo el rentFilm.
const Rental = require(../models/rental);
Habría que añadir a rental controller un indexByCostumer(cuestomerId){return Rental.find({customerId:customerId})};

USER CONTROLLER
async rentFilm(userId, carId, range){

    let daysNumber = moment(range[0]).diff(range[1]).days();
    let car = await Car.findById(carId)
    Rental.create({
        cuestomerId: userId,
        carId: car.id, 
        price: car.dailyPrice * daysNumber, 
        dateIni: range[0], 
        dateEnd: range[1]
    })
};
//En lugar de traernos el userId podríamos traernos el modelo entero y así poder acceder a sus propiedades (user.id). Lo que hay que pasarle es el ObjectId, sea a través del modelo o sea generado manualmente por nosotros.
RANGE: array con dos elementos, el 0 y el 1, en el que cada uno tendrán una fecha diferente.
MOMENT es una librería que calcula las fechas, y en las que moment es la primera fecha y diff la segunda, pidiéndole además que nos lo de en días. 
Habría que añadir en el controlador de 


ROUTES USER
userRouter.post('/:id/rent-car', async(req, res) => {
    try {
        const _id = req.params.id;
        const film = req.body;
        //Obtengo el user en función del ID
        const user = userController.findById
        //Obtengo el film en función del ID
        await userController.rentCar(id, car.id);
        res.json({status, id})
        
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

*/


/*
CÓDIGO QUE HA PASADO DAVID PESTANA, a partir del modelo Rental, siempre y cuando no entre ni req ni res por controller, sino por router. 
async rentMovie(userId,movieId,range) {
        Rental.create({
            customerId: userId,
            movieId: movieId,
            dateIni: range[0],
            dateEnd:  range[1]
        })
    }
async indexAllRentalByCustomer(userId) {
        returnRental.find({
            customerId: userId,
        })
    }
*/

/*

router.user('/:id/cars') -- le digo que use el router de car.
Recurso car del usuario ID.
Así, me llevan a los cars de un usuario simpleente escribiendo esto al final del routes de car. Así, de manera anidada, podríamos acceder por URL mediante Postman.



*/