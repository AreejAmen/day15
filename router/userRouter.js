const express=require('express');
const usersRouter=express.Router();

const {getusers, deleteuser, getuserByID, adduser, edituser}=require("../controllers/usercontrollers");
const checkAuth=require('../middleware/checkAuth');


usersRouter.get('/allUsers', checkAuth, getusers);
usersRouter.get('/:id', checkAuth, getuserByID);
usersRouter.post('/add-user', checkAuth, adduser);
usersRouter.put('/edit-user', checkAuth, edituser);
usersRouter.delete('/:id', checkAuth, deleteuser);

module.exports=usersRouter;