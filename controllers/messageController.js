const asyncHandler = require('express-async-handler');

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

const messageListGet = asyncHandler(async (req,res)=>{
    res.render('index', { title: 'Message',messages:messages});
});

const newMessageGet = asyncHandler(async (req,res)=>{
    res.render('form');
});

const newMessagePost = asyncHandler(async (req,res)=>{
    messages.push({text:req.body.message,user:req.body.name,added: new Date()});
    res.redirect('/');
});

module.exports = {messageListGet,newMessageGet,newMessagePost};


