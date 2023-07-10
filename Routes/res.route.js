const express = require("express");

const {ResModel} = require("../Models/restaurant.model");

const resRoute = express.Router();

resRoute.get("/restaurants",async(req,res) => {
    try{
        const all = await ResModel.find();
        res.status(200).send(all);
    }
    catch(err){
        res.status(400).send({"message":"Something went wrong","error":err.message});
    }
})

resRoute.get("/restaurants/:id",async (req,res) => {
    const id = req.params.id;
    try{
        const indiRes = await ResModel.findById(id);
        res.status(200).send(indiRes);
    }
    catch(err){
        res.status(400).send({"message":"Something went wrong","error":err.message});
    }
})

resRoute.post("/restaurants",async (req,res) => {
    const {name,address,menu} = req.body;
    try{
        const newRes = new ResModel({name,address,menu});
        await newRes.save();
        res.status(201).send({"message":"Restaurant added"});
    }
    catch(err){
        res.status(400).send({"message":"Something went wrong","error":err.message});
    }
})

resRoute.get("/restaurants/:id/menu",async (req,res) => {
    const id = req.params.id;
    try{
        const indiRes = await ResModel.findById(id);
        res.status(200).send(indiRes.menu);
    }
    catch(err){
        res.status(400).send({"message":"Something went wrong","error":err.message});
    }
})

resRoute.put("/restaurants/:id/menu", async (req,res) => {
    const id = req.params.id;
    const menu = req.body;
    try{
        const resData = await ResModel.findById(id);
        if(resData){
            resData.menu.push(menu);
            const updateMenu = await ResModel.findByIdAndUpdate(id,{menu : resData.menu});
            res.status(201).send({"message":"Menu item added"});
        }
    }
    catch(err){
        res.status(400).send({"message":"Something went wrong","error":err.message});
    }
})

resRoute.delete("/restaurants/:resid/menu/:menuid", async (req,res) => {
    const {resid,menuid} = req.params;
    try{
        const resData = await ResModel.findById(resid);
        if(resData){
            const arr = resData.menu;
            for(let i=0;i<arr.length;i++){
                if(arr[i]._id == menuid){
                    arr.splice(i,1);
                }
            }
            await ResModel.findByIdAndUpdate(resid,resData);
            res.status(202).send({"message":"Menu item deleted"});
        }
    }
    catch(err){
        res.status(400).send({"message":"Something went wrong","error":err.message});
    }
})

module.exports = {resRoute};