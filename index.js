import mongoose from "mongoose";
import dotenv from 'dotenv'
import User from './api/models/User.js';
import Book from './api/models/Book.js'

dotenv.config()

mongoose.connect(process.env.URI,async()=>{// tiene que ser asincrona porqur recibe datos d ela BD
    console.log("Conexion satisfactoria")

    // CRUD de user

    const user = await User.create({ // funcion de crear pide un objeto
      address: 'Dirección prueba',
      birthday: new Date(),
      contacts: ['Pedrito', 'Jorge'],
      email: 'corre@prueba.com',
      lastname: 'Rodriguez',
      name: 'Juan',
      password: '123',
      phone: '17232163',
      role: 'Client',
    });
  
    console.log(user);
  
    const users = await User.find({ 
      name: 'Juan',
    });
  
    // console.log(users);
  
    const promiseResult = await User.updateMany(
      {
        name: 'Juan',
        lastname: 'Rodriguez',
      },
      {
        role: 'Admin',
      }
    );
  
    // console.log(promiseResult);
  
    const result = await User.deleteOne({
      name: 'Juan',
    });
  
    console.log(result);

    const book = await Book.create({
        edition: 1,
        editorial: 'Los panchos',
        isbn: '1jd8un12db812dg7',
        pageNumber: 200,
        title: 'Mongo for dummies',
      });

    const books = await Book.find();
     console.log(books);

    const updated = await Book.findByIdAndUpdate('6350b2d4acdc19ec94ff0f6d', {
        title: 'Título cambiado',
     });

  console.log(updated);
});