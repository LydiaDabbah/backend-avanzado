import connect from './database.js';
import Restaurant from '../api/models/Restaurant.js';

connect();

async function run() {// esta funcion la hago para poder tener async
  const restaurants = await Restaurant
    .find( {cuisine:{ $ne: "American " },'grades.score':{ $gte: 70}})
   

  console.log(restaurants);
}



run();
