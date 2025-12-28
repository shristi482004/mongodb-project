const express = require('express');
const app=express();
const Path = require('path');
const mongoose = require('mongoose');
const Student=require('./models/StudentInfo');

app.use(express.static(Path.join(__dirname,'public')));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
   
        res.render('add-student');
   
});

app.post('/create', async (req, res) => {
   let {name, roll, branch, email, cgpa,image} = req.body;
   const student = await Student.create({
       name,
       roll,
       branch,
       email,
       cgpa,
       image
   });
  
   console.log('Student added:', student);
   res.redirect('/read');
});

app.get('/read', async (req, res) => {
    const students = await Student.find();
    console.log(students);
        res.render('read', { students });
   
});
app.post('/delete/:id', async (req, res) => {
    const deletedstudent = await Student.findOneAndDelete({ _id: req.params.id });
    console.log(deletedstudent);
      res.redirect('/read');
   
});

app.get('/edit/:id', async (req,res)=>{
    const student=await Student.findById(req.params.id);
    res.render('edit',{student});
})
app.post('/update/:id', async (req,res)=>{
    const student=await Student.findByIdAndUpdate(req.params.id,req.body);
    res.redirect('/read');
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});