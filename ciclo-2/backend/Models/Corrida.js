const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let corridaSchema = new Schema({
  Categoria: {
    type: String
  },
  Circuito: {
    type: String
  }
}, {
    collection: 'corrida'
  })

module.exports = mongoose.model('Corrida', corridaSchema)