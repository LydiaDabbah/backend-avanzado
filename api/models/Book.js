import mongoose,{ Schema } from "mongoose";

/**
 * 1. schema(molde)
 * 2.- nombre(String)
 */

 const bookSchema = new Schema({ // dondemongoose.Schema() e la funcion constructora y moongose.schema es la clase
    title: String,
    editorial: String,
    edition: String,
    pageNumber: Number,
    isbn: String,
    
  });
  
  export default mongoose.model('Book', bookSchema);