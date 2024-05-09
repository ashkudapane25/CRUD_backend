//import model
const Todo =require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try{
       //fetch all todo items from databaase
       const todos=await Todo.find({});
        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire TODo data is fetched",
        });
     }
     catch(err){
      console.error(err);
      res.status(500)
      .json({
        success:false,
        error:err.message,
        message:"Something went wrong",
      })
     }
}
exports.getTodoById = async (req, res) => {
    try {
        // Extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById(id);

        // Data for given id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: 'No data found for the given id',
            });
        }
        // Data for given id found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Data found for the given id ${id}`,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Something went wrong",
        });
    }
};
