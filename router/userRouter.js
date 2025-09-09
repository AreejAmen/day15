const express=require('express');
const usersRouter=express.Router();

const {getusers, getuserByID, adduser, edituser, deleteuser}=require("../controllers/usercontrollers");
const checkAuth=require('../middleware/checkAuth');

usersRouter.get('/:id', checkAuth, getuserByID);

usersRouter.get('/allUsers', checkAuth, getusers);

usersRouter.post('/add-user', checkAuth, adduser);

usersRouter.put('/edit-user', checkAuth, edituser);

usersRouter.delete('/:id', checkAuth, deleteuser);

module.exports=usersRouter;