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

export const messageListGet = asyncHandler(async (req,res)=>{
    res.render('index', { title: 'Message',messages:messages});
});

export const newMessageGet = asyncHandler(async (req,res)=>{
    res.render('form');
});

export const newMessagePost = asyncHandler(async (req,res)=>{
    messages.push({text:req.body.message,user:req.body.name,added: new Date()});
    res.redirect('/');
});


