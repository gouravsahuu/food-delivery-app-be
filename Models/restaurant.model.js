const mongoose = require("mongoose");

const resSchema = new mongoose.Schema({
        name: {type : String, required : true},
        address: {type : {String}, required : true},
        menu: {type : [{}], required : true}     
})

const ResModel = mongoose.model("restaurant",resSchema);

module.exports = {ResModel};