const express = require('express')
const Grocery = require('../models/Grocery')
const router = express.Router()

/**
 * Post route for the LeftoverPostController, /add creates a new LeftoverPost
 * given that the parameters given are valid.
 *
 * @param   {string}  /add   url route for this method
 * @param   {anonymouus}  async  router.post() takes an event handler as the 2nd argument
 * @param   {any}  req    the request from the client, meaning the data sent to our server
 * @param   {any}  res    the response from the server, meaning the data sent back to the client
 *
 * @return  {json} json with either the new model or the error
 */
router.post('/add', async (req, res) => {
  // create a new instance of the LeftoverPost model with the parameters from the client
  const data = new Grocery({
    //picture: req.body.picture,
    name: req.body.name,
    needed: req.body.needed,
  })

  // if the data is valid save it and return 200 OK to client
  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  }
  // if not, return the error to the client
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

/**
 * Get route for the LeftoverPostController, /list listes all LeftoverPosts
 *
 * @param   {string}  /list  url route for this method
 * @param   {anonymous}  async  router.get() takes an event handler as the 2nd argument
 * @param   {any}  req    the request from the client, meaning the data sent to our server
 * @param   {any}  res    the response from the server, meaning the data sent back to the client
 *
 * @return  {json} json with either the list of models or the error
 */
router.get('/list', async (req, res) => {
  // return a list of all LeftoverPosts, if error return that error
  try {
    // find the models
    const data = await Grocery.find()
    // return the models
    res.json(data)
  }
  catch (error) {
    // catch the error and return it
    res.status(500).json({ message: error.message })
  }
})

/**
 * Find a given model by id in the url, find that model in the db, update it with the 
 * new data from the given model, then return the new model or error if any
 *
 * @param   {string}  /update/:id  /api/update/{id of model}
 * @param   {anonymous}  async router.get() takes an event handler as the 2nd argument
 * @param   {any}  req the request from the client, meaning the data sent to our server
 * @param   {any}  res the response from the server, meaning the data sent back to the client
 *
 * @return  {json} json with either the updated model or the error
 */
router.patch('/update/:id', async (req, res) => {
  try {
    // get the updated model from the request
    const id = req.params.id
    const updatedData = { needed: req.body.needed }
    const options = { new: true } // means that the method will return the new model

    // find the old model and update it with the new model
    const result = await Grocery.findByIdAndUpdate(id, updatedData, options)

    // return the result to the client
    res.send(result)
  }
  catch (error) {
    // if error, catch it and return it to the client
    res.status(500).json({ message: error.message })
  }
})

// export the router, making it available in index.js
module.exports = router
