const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },

    amount:Number,

    paymentMethod:{
        type:String,
        enum:["COD","Razorpay","Stripe"]
    },

    paymentStatus:{
        type:String,
        enum:[
            "Pending",
            "Success",
            "Failed"
        ],
        default:"Pending"
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("Payment",paymentSchema);