const express=require('express');
const studentsRouter=express.Router();

const {getStudents, getStudentByID, addstudent, editstudent, deletestudent}=require("../controllers/studentcontroller");
const checkAuth=require('../middleware/checkAuth');

studentsRouter.get('/:id', checkAuth, getStudentByID);

studentsRouter.get('/allStudents', checkAuth, getStudents);

studentsRouter.post('/add-student', checkAuth, addstudent);

studentsRouter.put('/:id', checkAuth, editstudent);

studentsRouter.delete('/:id', checkAuth, deletestudent);

module.exports=studentsRouter;