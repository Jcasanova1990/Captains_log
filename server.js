require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const Log = require('./models/log')
const PORT = process.env.PORT || 3003

const app = express()

app.use(express.urlencoded({ extended: true }))// build a ssr website
// app.use(express.json()) //build an api
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

// INDUCES

// INDEX
// list all Logs
app.get('/logs', async (req, res) => {
    try {
        const foundLogs = await Log.find({})
        res.render('logs/Index', {
            logs: foundLogs
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// NEW
// show the user a form to fill out to create a log
app.get('/logs/new', (req, res) => {
    res.render('logs/New')
})
// DELETE
// backend only functionality that is used to delete a log
app.delete('/logs/:id', async (req, res) => {
    try {
        await Log.findOneAndDelete({'_id': req.params.id})
            .then(() => {
                res.redirect('/logs')
            })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// UPDATE
// backend only functionality that is used to update a log
app.put('/logs/:id', async (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        await Log.findOneAndUpdate({ '_id': req.params.id }, 
            req.body, { new: true })
            .then(() => {
                res.redirect(`/logs/${req.params.id}`)
            })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
} )

// CREATE
// backend only functionality that is used to create a log

app.post('/logs', async (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try{
        const createdLog = await Log.create(req.body)
        res.redirect(`/logs/${createdLog._id}`)
    }catch(error){
        res.status(400).send({message: error.message})
    }
})

// EDIT
// show you a form that lets you edit the log
app.get('/logs/:id/edit', async (req, res) => {
    try {
        const foundLog = await Log.findOne({'_id': req.params.id})
        res.render('logs/Edit', {
           log: foundLog
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// SHOW
// shows you 1 individual log
app.get('/logs/:id', async (req, res) => {
    try {
        const foundLog = await Log.findOne({_id: req.params.id})
        res.render('logs/Show', {
            log: foundLog
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})




app.listen(PORT, () =>{
    console.log(`Listening at port, ${PORT}`)
})