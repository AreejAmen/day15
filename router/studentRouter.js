const express=require('express');
const studentsRouter=express.Router();

const {getStudents, deletestudent, getStudentByID, addstudent, editstudent}=require("../controllers/studentcontroller");
const checkAuth=require('../middleware/checkAuth');

studentsRouter.get('/allStudents', checkAuth, getStudents);
studentsRouter.get('/:id', checkAuth, getStudentByID);
studentsRouter.post('/add-student', checkAuth, addstudent);
studentsRouter.put('/:id', checkAuth, editstudent);
studentsRouter.delete('/:id', checkAuth, deletestudent);

module.exports=studentsRouter;