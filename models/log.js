const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    name: { type: String, require: true },
    color: { type: String, require: true},
    shipIsBroken: Boolean
})

const Log = mongoose.model('Log', logSchema)

module.exports = Log