var mongoose = require("mongoose")

/**
 * Grocery model, if this isn't self explanitory look at the LeftoverPost model
 */
const GrocerySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  needed: {
    type: Boolean,
    required: true
  },
  createdTimestamp: {
    type: Date, // means the timestamp is a date
    required: true, // means the timestamp is required
    // means the timestamp is required, and the values is the timestamp 
    // when this function is runs
    default: () => {
        return new Date()
    }
  },
})

// gives the name of the table in mongodb
module.exports = mongoose.model("Grocery", GrocerySchema, "Grocery")