//import model
const Todo =require("../models/Todo");

//define route handler

exports.deleteTodo = async(req,res) => {
    try{
       // Extract todo items basis on id
       const {id} = req.params;
       await Todo.findByIdAndDelete( id );
       res.status(200).json({
        success:true,
        msg:"todo item deleted"});
     }
     catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Something went wrong",
        });
     }
}