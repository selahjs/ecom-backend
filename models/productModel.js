const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prouctSchema = new Schema({
    id:{
        type: Number,
        required: false
    },
    imgUrl:{
        type: String,
        required: false
    },
    productTitle:{
        type: String,
        required: true
    },
    productColor:{
        type: String,
        required: false
    },
    productCategory:{
        type: String,
        required: false
    },
    accessories:{
        type: String,
        required: false
    },
    available:{
        type: String,
        required: false
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
        required: false
    },
    selected:{
        type: Boolean,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', prouctSchema);
