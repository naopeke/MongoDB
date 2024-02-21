const {Schema, model} = require('mongoose');

const PhotoSchema = new Schema(
    {
        user_name: String,
        url: String,
        title: String,
        description: String
    }
)

