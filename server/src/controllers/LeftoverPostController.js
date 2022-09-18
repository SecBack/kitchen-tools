const express = require('express');
const LeftoverPost = require('../models/LeftoverPost');
const router = express.Router();

/**
 * Post route for the LeftoverPostController, /add creates a new LeftoverPost
 * given that the parameters given are valid.
 *
 * @param   {string}  /add   url route for this method
 * @param   {anonymouus}  async  router.post() takes an event handler as the 2nd argument
 * @param   {any}  req    the request from the client, meaning the data sent to our server
 * @param   {any}  res    the response from the server, meaning the data sent back to the client
 *
 */
router.post('/add', async (req, res) => {
    // create a new instance of the LeftoverPost model with the parameters from the client
    const data = new LeftoverPost({
        //picture: req.body.picture,
        description: req.body.description,
        where: req.body.where,
        who: req.body.who
    })

    // if the data is valid save it and return 200 OK to client
    try {
        const dataToSave = await data.save();
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
 */
router.get('/list', async (req, res) => {
    // return a list of all LeftoverPosts, if error return that error
    try {
        // find the models
        const data = await LeftoverPost.find();
        // return the models
        res.json(data)
    }
    catch (error) {
        // catch the error and return it
        res.status(500).json({ message: error.message })
    }
})

// export the router, making it available in index.js
module.exports = router
