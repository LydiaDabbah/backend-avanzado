// creamos este archivo para reciclar codigo y ponerlo en cada ejercicio
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => { // lo ponemos en una funcion para poder exportarlo
  mongoose.connect(process.env.URI, () => {
    console.log('Se ha conectado a la base de datos1');
  });
};

export default connect;