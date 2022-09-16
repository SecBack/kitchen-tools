var mongoose = require("mongoose")

/**
 * LeftoverPost model, this tells mongodb how the model looks
 */
const LeftoverPostSchema = mongoose.Schema({
    // picture is just a string for now, but will be an actual picture later,
    picture: {
        type: String, // means the picture field is a string
        required: true // means that the field is required
        //data: Buffer, for now its just a string and not an actual picture
        //contentType: String,
    },
    // picture has a description which is just text
    description: {
        type: String, // means the description field is a string        
        required: true // means the description field required
    },
    // the pictures has a timestamp for when it was created
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
module.exports = mongoose.model("LeftoverPost", LeftoverPostSchema, "LeftoverPost")