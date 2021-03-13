const { Schema, model } = require('mongoose');

const taskSchemma=new Schema({
    task: {
        type: String,
        required: true
    },
    description: String
});

module.exports = model('Task',taskSchemma);