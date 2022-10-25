import connect from './database.js';
import Restaurant from '../api/models/Restaurant.js';

connect();

async function run() {// esta funcion la hago para poder tener async
  const restaurants = await Restaurant.find()

  console.log(restaurants);
}



run();
