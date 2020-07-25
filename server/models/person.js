const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const personSchema = new Schema({
    name: String,
    gender: String,
    age: Number
});

module.exports = mongoose.model('person', personSchema,'persons');   