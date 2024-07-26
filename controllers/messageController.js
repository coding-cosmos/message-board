const asyncHandler = require('express-async-handler');
const db = require('../db/queries');

const messageListGet = asyncHandler(async (req,res)=>{
    const messages = await db.getAllMessages();
    res.render('index', { title: 'Message',messages:messages});
});

const newMessageGet = asyncHandler(async (req,res)=>{
    res.render('form');
});

const newMessagePost = asyncHandler(async (req,res)=>{
    await db.insertMessage(req.body.name,req.body.message,new Date());
    res.redirect('/');
});

module.exports = {messageListGet,newMessageGet,newMessagePost};