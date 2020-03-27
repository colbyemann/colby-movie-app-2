
const mongoose = require('mongoose');

// define a schema that maps to the structure of the data in MongoDB
const imageSchema = new mongoose.Schema({
   id: Number,
   tmdb_id: Number,
   imdb_id: String,
   release_date: String,
   title: String,
   runtime: Number,
   revenue: Number,
   tagline: String,
   poster: String,
   ratings: {
    popularity: Number,
    average: Number,
    count: Number
   },
   details: {
     overview: String,
     genres: [Object],
     keywords: [Object]
   },
   production: {
     crew: [Object],
     cast: [Object],
     companies: [Object],
     countrues: [Object]
   }
 });

 module.exports = mongoose.model('Movie',imageSchema);