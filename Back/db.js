//Archivo de configuracion de base de datos.

import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://optimen:optimen@cluster0.imu9wo0.mongodb.net/Optimen', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(db => console.log('Db conecto '))
.catch(error => console.log(error))

