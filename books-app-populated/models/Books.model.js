const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
    {
        title: String,
        description: String,
        author: [{
            ref: 'author',                      // Nombre del modelo a relacionar
            type: Schema.Types.ObjectId
        }],
        rating: Number
    },
    {
        timestamps: true
    }
);

module.exports = model('book', bookSchema)