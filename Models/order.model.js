const mongoose = require("mongoose");
const {UserModel} = require("./user.model");
const {ResModel} = require("./restaurant.model");

const orderSchema = new mongoose.Schema({
        user : { type: mongoose.ObjectId, ref: UserModel },
        restaurant : { type: mongoose.ObjectId, ref: ResModel },
        items: {type : [{}], required : true},
        totalPrice: {type : Number, required : true},
        deliveryAddress: {type : {String}, required : true},
        status: {type : String, required : true, enum : ["placed", "preparing", "on the way", "delivered"]} 
})

const OrderModel = mongoose.model("order",orderSchema);

module.exports = {OrderModel};