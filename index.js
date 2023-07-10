const express = require("express");
require("dotenv").config();
const port = process.env.port;
const {connection} = require("./Configs/db");
const {userRoute} = require("./Routes/user.route");
const {resRoute} = require("./Routes/res.route");
const {orderRoute} = require("./Routes/order.route");

const app = express();

app.use(express.json());

app.use("/api",userRoute);
app.use("/api",resRoute);
app.use("/api",orderRoute);

app.get("/",(req,res) => {
    res.send({"message":"Food Delivery App Backend"});
})

app.listen(port,async () => {
    try{
        await connection;
        console.log("Connected to Database");
        console.log(`Server is running at port ${port}`);
    }
    catch(err){
        console.log(err);
    }
})