const express = require('express');
const router = express.Router();
//import controller
const {createToDo}=require("../controllers/createToDo");
const {getTodo,getTodoById}=require("../controllers/getTodo");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");

//define APi routes
router.post("/createToDo",createToDo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
module.exports = router;