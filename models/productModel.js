const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prouctSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    },
    productTitle:{
        type: String,
        required: true
    },
    productColor:{
        type: String,
        required: true
    },
    productCategory:{
        type: String,
        required: true
    },
    accessories:{
        type: String,
        required: true
    },
    available:{
        type: String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    },
    productStock:{
        type: Number,
        required: true
    },
    productRating:{
        type: Number,
        required: true
    },
    selected:{
        type: Boolean,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', prouctSchema);
