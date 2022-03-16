const mongoose = require("mongoose");
const prodcutschema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"please enter product desc"]
    },
    price:{
        type:Number,
        required:[true,"please enter product price"],
        maxlength:[8,"price cant exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
    ],
    category:{
type:String

    },
    stock:{
        type:Number,
       
        maxlength:[4,"stock cant exceed 4 characters"]
    },
    numberofreviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdat:{
        type:Date,
        default:Date.now
    }
})
module.exports =mongoose.model("product",prodcutschema)