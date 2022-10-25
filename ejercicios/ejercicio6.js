import connect from './database.js';
import Restaurant from '../api/models/Restaurant.js';

connect();

async function run() {// esta funcion la hago para poder tener async
  const restaurants = await Restaurant .find( 
        {
            $or:
            [
                {
                    borough: 'Staten Island',
                },
                {
                    borough: 'Bronx Brooklyn',
                }
            ]
        },

        {
            name:1,
            borough:1
        }
        
        )
   

  console.log(restaurants);
}



run();
