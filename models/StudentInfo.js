const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/studentinfoDB');
const studentSchema=new mongoose.Schema({
    
  name: String,
  roll: String,
  branch: String,
  email: String,
  cgpa: Number,
  image: String
});

const Student=mongoose.model('Student',studentSchema);

module.exports=Student;