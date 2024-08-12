const express = require('express');
const e = express();
e.get('/',(req,res)=>{
    res.send("Welcome home");
});

e.get('/home',(req,res)=>{
    res.send(
        `
        <a href="/about"><button><h1>About</h1></button></a>
        <a href="/services"><button><h1>Services</h1></button></a>
        <a href="/contact_us"><button><h1>Contact Us</h1></button></a>
        `
    )
});
e.get('/about',(req,res)=>{
    res.send( 
        `
        <a href="/home"><button><h1>Home</h1></button></a>
        <a href="/services"><button><h1>Services</h1></button></a>
        <a href="/contact_us"><button><h1>Contact Us</h1></button></a>
        `)
});
e.get('/services',(req,res)=>{
    res.send(
         `
        <a href="/home"><button><h1>Home</h1></button></a>
        <a href="/about"><button><h1>About</h1></button></a>
        <a href="/contact_us"><button><h1>Contact Us</h1></button></a>
        `)
});
e.get('/contact_us',(req,res)=>{
    res.send(
        `
        <a href="/home"><button><h1>Home</h1></button></a>
        <a href="/about"><button><h1>About</h1></button></a>
        <a href="/services"><button><h1>Services</h1></button></a>
        
        `)
});


e.listen(3000,()=>{
    console.log('Server Started');
});