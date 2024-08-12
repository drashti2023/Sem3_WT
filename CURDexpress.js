const express = require('express');
const app = express();
const bodyParse = require('body-parser');

const students = [
    {
        id:1023,
        name:'Drashti',
        age:18
    },
    {
        id:1008,
        name:'Kuldeep',
        age:21   
    },
    {
        id:1025,
        name:'Meghna',
        age:27
    }
];

app.use(bodyParse.urlencoded({extends:false}));

app.get('/students',(req,res)=>{
      res.json(students);
});

app.post('/students',(req,res)=>{
     id = students.length+i;
      const obj = {
          id:id,
          name:req.body.name,
          age:req.body.age
      }
      students.push(obj);
    res.json(students);
});

app.delete('/students',(req,res)=>{
    const id = req.params.id;
    students.splice(id,1);
    res.json(students);
});

app.put('/students/:id',(req,res)=>{
    students[req.params.id].name = req.body.name;
    res.json(students);
});

app.listen(3000,()=>{
    console.log("Server Started");
});